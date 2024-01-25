import CustomModal from "../../../../Components/CustomModal/CustomModal";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import useEditRequest from "../../../../Hooks/BorrowRequestHooks/useEditRequest";
import SuccessSnackbar from "../../../../Components/Snackbars/SuccessSnackbar";
import { getApcisToken } from "../../../../Utils/HelperFunctions/UserStore/GetToken";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import EditTransactionDetails from "./EditTransactionDetails";
import EditItemDetails from "./EditItemDetails";
import convertDatesToApiFormat from "../../../../Utils/HelperFunctions/DateFunction/convertDatesToApiFormat";
import AddNewItems from "./AddNewItems";
import { getDirtyValues } from "../../../../Utils/HelperFunctions/FormRelatedFunctions/getDirtyValues";

const EditRequestModal = ({ isEditOpen, setEditOpen, specificRequestData }) => {
  const transacData = specificRequestData?.transac_data;
  const itemData = specificRequestData?.items;

  const { secondaryMain } = ColorVariables();

  const {
    isEditSuccess,
    isEditError,
    isEditLoading,
    setEditError,
    setEditSuccess,
    handleEditRequest,
  } = useEditRequest();

  const { handleSubmit, control, setValue, getValues, formState } = useForm();
  const { dirtyFields } = formState;
  const apcisToken = getApcisToken();

  const onSubmitEdit = () => {
    const formData = getValues();
    let requestBody = {};

    // 01. Check for Change in Transaction Data
    const dirtyRequestData = getDirtyValues(
      formData["request_data"],
      dirtyFields["request_data"]
    );
    if (Object.keys(dirtyRequestData).length > 0) {
      requestBody = {
        ...requestBody,
        request_data: { ...dirtyRequestData, apcis_token: apcisToken },
      };
    }
    // 02. Check for Change in Existing Items Data
    const dirtyEditItemData = getDirtyValues(
      formData["edit_existing_items"],
      dirtyFields["edit_existing_items"]
    );
    if (Object.keys(dirtyEditItemData).length > 0) {
      // 02.01 Check for items with is_cancelled field
      let editExistingItems = Object.values(dirtyEditItemData).map((item) => {
        if (item["is_cancelled"] === true) {
          // Remove all fields EXCEPT item_group_id and is_cancelled
          return {
            item_group_id: item["item_group_id"],
            is_cancelled: true,
          };
        }
        // Remove is_cancelled field (FALSE)
        const { is_cancelled, ...rest } = item;
        return rest;
      });

      // 02.02 Convert date from input to the expected format by API
      editExistingItems = convertDatesToApiFormat(editExistingItems);

      requestBody = {
        ...requestBody,
        edit_existing_items: { ...editExistingItems },
      };
    }

    // 03. Check for New Items
    let addNewItems = formData["add_new_items"];
    if (addNewItems && Object.keys(addNewItems).length > 0) {
      // 03.01 Convert date from input to the expected format by API
      addNewItems = convertDatesToApiFormat(addNewItems);
      requestBody = {
        ...requestBody,
        add_new_items: { ...addNewItems },
      };
    }

    if (Object.keys(requestBody).length === 0) {
      return setEditOpen(false);
    }

    handleEditRequest(transacData.id, requestBody);
    console.log("Request Body", requestBody);
    if (!isEditLoading && isEditError) {
      setEditOpen(false);
    }
  };

  return (
    <>
      <CustomModal isModalOpen={isEditOpen} setModalOpen={setEditOpen}>
        <form
          onSubmit={handleSubmit(onSubmitEdit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
            padding: "16px",
            margin: "auto",
          }}
        >
          {transacData && (
            <EditTransactionDetails
              control={control}
              setValue={setValue}
              transacData={transacData}
            />
          )}
          {itemData && (
            <EditItemDetails
              itemData={itemData}
              control={control}
              departmentCode={transacData?.department_acronym}
              setValue={setValue}
            />
          )}

          {itemData && (
            <AddNewItems
              itemData={itemData}
              selectedOffice={transacData?.department_acronym}
              control={control}
              setValue={setValue}
              getValues={getValues}
            />
          )}

          <button
            disabled={isEditLoading}
            style={{
              width: "100%",
              backgroundColor: secondaryMain,
              marginTop: "12px",
            }}
          >
            {isEditLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </CustomModal>
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
