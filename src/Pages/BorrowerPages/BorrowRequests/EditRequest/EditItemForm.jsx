import PageTitle from "../../../../Components/Text/PageTitle";
import { getPendingBorrowedItemStatus } from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowedItemStatusConstantHelper";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import EditItemFormField from "./EditItemFormField";

const EditItemForm = ({ setValue, control, itemData, departmentCode }) => {
  const pendingApproval = getPendingBorrowedItemStatus();
  const filteredItems = itemData.filter(
    // Can edit all pending approval only
    (itemModel) => itemModel?.borrowed_item_status === pendingApproval
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Divider
        textAlign="left"
        sx={{
          "&:before": { width: 0 },
          "& .MuiDivider-wrapper": { padding: "0 16px 0 0" },
          marginTop: "16px",
        }}
      >
        <PageTitle fontSize="1rem">Edit Items</PageTitle>
      </Divider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {filteredItems &&
          filteredItems.map(
            (itemModel, index) =>
              // itemModel?.item?.id && (
              itemModel?.id && (
                <EditItemFormField
                  key={index}
                  index={index}
                  itemModel={itemModel}
                  control={control}
                  setValue={setValue}
                  departmentCode={departmentCode}
                  filteredItems={filteredItems}
                />
              )
          )}
      </div>
    </div>
  );
};

EditItemForm.propTypes = {
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  itemData: PropTypes.array.isRequired,
  departmentCode: PropTypes.string.isRequired,
};

export default EditItemForm;
