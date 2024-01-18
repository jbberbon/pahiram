import CustomModal from "../../../../Components/CustomModal/CustomModal";
import PropTypes from "prop-types";
import PageTitle from "../../../../Components/Text/BorrowRequestsTitle";

import { useForm, Controller } from "react-hook-form";
// import { TextField } from "@mui/material";
import SearchUserField from "../../../../Components/InputFields/SearchUserField";
import { useState } from "react";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import { MenuItem, TextField } from "@mui/material";
import useEditRequest from "../../../../Hooks/BorrowRequestHooks/useEditRequest";
import SuccessSnackbar from "../../../../Components/Snackbars/SuccessSnackbar";
import useSearchEndorser from "../../../../Hooks/SearchHooks/useSearchEndorser";
import { BORROW_PURPOSES } from "../../../../Utils/Constants/BackendConstants/BORROW_PURPOSES";
import { getApcisToken } from "../../../../Utils/HelperFunctions/UserStore/GetToken";

const EditRequestModal = ({ isEditOpen, setEditOpen, specificRequestData }) => {
  const [userSearchInput, setUserSearchInput] = useState("");
  const { handleSubmit, control, setValue, getValues } = useForm();

  const isOfficeSelected = true;
  const { results, loading, error, setError } = useSearchEndorser(
    userSearchInput,
    isOfficeSelected
  );

  const {
    isEditSuccess,
    isEditError,
    isEditLoading,
    setEditError,
    setEditSuccess,
    handleEditRequest,
  } = useEditRequest();

  const apcisToken = getApcisToken();
  const onSubmitEdit = async () => {
    try {
      const formData = getValues();

      // delete formData.endorsed_by;

      const requestBody = {
        request_data: { ...formData, apcis_token: apcisToken },
      };
      console.log(requestBody);
      handleEditRequest(specificRequestData.id, requestBody);
      if (!isEditLoading) {
        setEditOpen(false);
      }
    } catch {
      console.log("edit error");
    }
  };

  return (
    <>
      <CustomModal isModalOpen={isEditOpen} setModalOpen={setEditOpen}>
        <div style={{ width: "100%", padding: "16px" }}>
          <PageTitle fontSize="1rem">Edit Request Details</PageTitle>

          <form
            onSubmit={handleSubmit(onSubmitEdit)}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
              gap: "16px",
            }}
          >
            <Controller
              name="endorsed_by"
              control={control}
              defaultValue={specificRequestData?.endorsed_by?.apc_id || ""}
              rules={{
                maxLength: {
                  value: 30,
                  message: "Endorser Name should not exceed 30 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9\s-]+$/,
                  message:
                    "Invalid input. Only letters, numbers, and hyphens are allowed.",
                },
                required: specificRequestData?.endorsed_by?.apc_id
                  ? "You cannot remove existing endorser"
                  : false,
              }}
              render={({ field, fieldState }) => (
                <SearchUserField
                  field={field}
                  fieldState={fieldState}
                  disabled={false}
                  setSearchInput={setUserSearchInput}
                  label="Change Endorser"
                  options={
                    results.length > 0
                      ? results
                      : [specificRequestData?.endorsed_by]
                  }
                  loading={loading}
                  setValue={setValue}
                  placeholder="Enter endorser name"
                  defaultValue={specificRequestData?.endorsed_by || ""}
                />
              )}
            />
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <Controller
                name="purpose"
                control={control}
                defaultValue={specificRequestData?.purpose}
                rules={{ required: "Purpose is required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Change Purpose"
                    variant="standard"
                    select
                    disabled={!isOfficeSelected}
                    error={Boolean(fieldState?.error)}
                    helperText={fieldState?.error?.message}
                    sx={{ flex: "1 1 8rem" }}
                  >
                    {Object.entries(BORROW_PURPOSES).map(([key, purpose]) => (
                      <MenuItem key={key} value={key}>
                        {purpose.purpose}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <Controller
                name="user_defined_purpose"
                control={control}
                defaultValue={specificRequestData?.user_defined_purpose}
                rules={{
                  required: "Purpose is required",
                  minLength: {
                    value: 5,
                    message: "Purpose should be at least 5 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Purpose should not exceed 30 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9\s-]+$/,
                    message:
                      "Invalid input. Only letters, numbers, and hyphens are allowed.",
                  },
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Specify Purpose"
                    variant="standard"
                    type="text"
                    disabled={!isOfficeSelected}
                    error={Boolean(fieldState?.error)}
                    helperText={fieldState?.error?.message}
                    sx={{ flex: "1 1 8rem" }}
                  />
                )}
              />
            </div>
            <button disabled={isEditLoading}>
              {isEditLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </CustomModal>
      <ErrorSnackbar error={error} setError={setError} />
      <ErrorSnackbar error={isEditError} setError={setEditError} />
      <SuccessSnackbar
        isSuccess={isEditSuccess}
        setIsSuccess={setEditSuccess}
        successMessage={isEditSuccess}
      />
    </>
  );
};

EditRequestModal.propTypes = {
  isEditOpen: PropTypes.bool.isRequired,
  setEditOpen: PropTypes.func.isRequired,
  specificRequestData: PropTypes.object.isRequired,
};

export default EditRequestModal;
