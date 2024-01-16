import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import OfficeSelector from "./OfficeSelector";
import BreakpointVariables from "../../../Utils/Theming/BreakpointVariables";
import TransactionForm from "./TransactionForm";

import BorrowFormTitle from "./BorrowFormTitle";
import Button from "@mui/material/Button";
import ChooseFormSubtitle from "./ChooseFormSubtitle";
import ItemForm from "./ItemForm";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import convertDatesToApiFormat from "../../../Utils/HelperFunctions/DateFunction/convertDatesToApiFormat";
import SuccessSnackbar from "../../../Components/Snackbars/SuccessSnackbar";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import ColorVariables from "../../../Utils/Theming/ColorVariables";
import useSubmitRequest from "../../../Hooks/BorrowRequestHooks/useSubmitRequest";

// import PropTypes from "prop-types";

const BorrowItems = () => {
  const { neutralBackground } = ColorVariables();
  const { isSm } = BreakpointVariables();

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

  const [isFormResetting, setFormResetting] = useState(false);
  const {
    isSubmitSuccess,
    isSubmitError,
    isSubmitLoading,
    setSubmitError,
    setSubmitSuccess,
    handleSubmitRequest,
  } = useSubmitRequest();

  const onSubmit = async (data) => {
    const inputPayload = convertDatesToApiFormat(data);

    if (inputPayload.endorsed_by) {
      // Assuming that endorsed_by is a non-empty string or a truthy value
      inputPayload.apcis_token =
        "10|h6DJG3p2n2VD6PHXBy218Y2EgzGHsZCXsQUPYWRDf22f2c66";
    } else {
      // If endorsed_by is falsy or an empty string, remove it from the payload
      delete inputPayload.endorsed_by;
    }
    await handleSubmitRequest(inputPayload);
  };

  // Reset the form after successfull submission
  useEffect(() => {
    let timeoutId;

    if (isSubmitSuccess) {
      setFormResetting(true);
      timeoutId = setTimeout(() => {
        reset();
        setSubmitSuccess(null);
      }, 3000);
    }

    return () => {
      // Cleanup the timeout if the component unmounts or isSubmitSuccess changes
      clearTimeout(timeoutId);
      setFormResetting(false);
    };
  }, [isSubmitSuccess, reset, setSubmitSuccess]);

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
          backgroundColor: neutralBackground,
          padding: "16px",
          width: "100%",
          gap: "24px",
          boxShadow: "4px 4px 7px 2px rgba(0,0,0,0.1)",
          borderRadius: "8px",
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
          disabled={!selectedOffice || isSubmitLoading || isFormResetting}
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
            {isSubmitLoading || isFormResetting ? "Loading" : "Submit Request"}
          </p>
        </Button>
      </form>
      <SuccessSnackbar
        isSuccess={isSubmitSuccess}
        setIsSuccess={setSubmitSuccess}
        successMessage="Successfully submitted request"
        errorMessage="Failed to submit request"
      />
      <ErrorSnackbar error={isSubmitError} setError={setSubmitError} />
    </MainDisplayLayout>
  );
};

export default BorrowItems;
