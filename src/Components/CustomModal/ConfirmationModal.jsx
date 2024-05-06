import { Button, Modal } from "@mui/material";
import PropTypes from "prop-types";
import ColorVariables from "../../Utils/Theming/ColorVariables";
import BreakpointVariables from "../../Utils/Theming/BreakpointVariables";

const ConfirmationModal = ({
  handleSubmit,
  isConfirmationModalOpen,
  closeConfirmationModal,
}) => {
  const { neutralBackground, neutralMain } = ColorVariables();
  const { isSm } = BreakpointVariables();

  const pStyleRegular = {
    padding: 0,
    margin: 0,
    fontSize: "0.875rem",
    color: neutralMain,
  };

  return (
    <Modal open={isConfirmationModalOpen} onClose={closeConfirmationModal}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: neutralBackground,
            width: isSm ? "70%" : "40%",
            padding: "18px",
            borderRadius: "8px",
          }}
        >
          <p style={{ ...pStyleRegular, marginBottom: "12px" }}>
            Are you sure you want to mark penalty as paid?
          </p>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
          >
            <Button onClick={closeConfirmationModal} color="primary">
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: "0.875rem",
                }}
              >
                Cancel
              </p>
            </Button>
            <Button onClick={handleSubmit} color="success" variant="contained">
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: "0.875rem",
                }}
              >
                Confirm
              </p>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isConfirmationModalOpen: PropTypes.bool.isRequired,
  closeConfirmationModal: PropTypes.func.isRequired,
};

export default ConfirmationModal;
