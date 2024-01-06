import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import { useMode } from "../../../Contexts/theme";
import OfficeSelector from "./OfficeSelector";
import BreakpointVariables from "../../../Utils/Theming/BreakpointVariables";
import TransactionForm from "./TransactionForm";

import BorrowFormTitle from "./BorrowFormTitle";
import { Button } from "@mui/material";
import ChooseFormSubtitle from "./ChooseFormSubtitle";
import ItemForm from "./ItemForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitBorrowRequestAPI from "../../../APIEndpoints/BorrowItemsAPI/SubmitBorrowRequestAPI";
import convertDatesToApiFormat from "../../../Utils/HelperFunctions/DateFunction/convertDatesToApiFormat";
import SuccessSnackbar from "../../../Components/Snackbars/SuccessSnackbar";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";

// import PropTypes from "prop-types";

const BorrowItems = () => {
  const [theme] = useMode();
  const neutralBackground = theme.palette.neutral.background;
  const { isSm } = BreakpointVariables();
  const [isSuccess, setIsSuccess] = useState(null);
  const [error, setError] = useState(null);

  // const { handleSubmit, control, reset, watch } = useForm();
  const { handleSubmit, control, watch, setValue, reset } = useForm();

  const selectedOffice = watch("department_code");
  const endorser = watch("endorsed_by");
  const items = watch("items");

  const [fieldCount, setFieldCount] = useState(1);
  const addFieldCount = () => {
    if (fieldCount < 10) {
      setFieldCount(fieldCount + 1);
      console.log(fieldCount);
    } else {
      console.log("Max 10 fields");
    }
  };
  const subtractFieldCount = () => {
    if (fieldCount > 1) {
      setFieldCount(fieldCount - 1);
      console.log(fieldCount);
    } else {
      console.log("Min 1 field");
    }
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const inputPayload = convertDatesToApiFormat(data);
      const submitRequest = await SubmitBorrowRequestAPI(inputPayload);

      if (submitRequest.status) {
        setIsSuccess(true);
        setTimeout(() => {
          reset();
        }, 2000);
      } else {
        setError(submitRequest.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setError(error);
      console.error("Error submitting request:", error);
    }
  };
  return (
    <MainDisplayLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: neutralBackground, // Make sure to define neutralBackground
          // padding: isSm ? "16px" : "32px",
          padding: "16px",
          width: "100%",
          gap: "24px",
        }}
      >
        <BorrowFormTitle isMd={isSm} />
        <OfficeSelector
          control={control}
          items={items}
          setValue={setValue}
          reset={reset}
        />
        <TransactionForm
          control={control}
          isOfficeSelected={!!selectedOffice}
          endorser={endorser}
          setValue={setValue}
        />

        <ChooseFormSubtitle
          addFieldCount={addFieldCount}
          isOfficeSelected={!!selectedOffice}
        />
        <ItemForm
          control={control}
          fieldCount={fieldCount}
          subtractFieldCount={subtractFieldCount}
          isOfficeSelected={!!selectedOffice}
          setValue={setValue}
          selectedOffice={selectedOffice}
          items={items}
        />

        <Button
          variant="contained"
          type="submit"
          disabled={!selectedOffice}
          disableElevation
          sx={{
            width: isSm ? "100%" : "25%",
            marginLeft: isSm ? "0" : "auto",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <p
            style={{
              fontWeight: "500",
              margin: 0,
              padding: "2px 0",
              color: "black",
            }}
          >
            Submit Request
          </p>
        </Button>
      </form>
      <SuccessSnackbar
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        successMessage="Successfully submitted request"
        errorMessage="Failed to submit request"
      />
      <ErrorSnackbar error={error} setError={setError} />
    </MainDisplayLayout>
  );
};

export default BorrowItems;
