import Divider from "@mui/material/Divider";
import CustomModal from "../../../Components/CustomModal/CustomModal";
import BreakpointVariables from "../../../Utils/Theming/BreakpointVariables";
import ColorVariables from "../../../Utils/Theming/ColorVariables";
import PageTitle from "../../../Components/Text/PageTitle";

import PropTypes from "prop-types";

const ItemModal = ({ specificResource, isModalOpen, setIsModalOpen }) => {
  const { isSm } = BreakpointVariables();
  const { neutralMain } = ColorVariables();

  return (
    <>
      <CustomModal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: isSm ? "20px" : "18px",
            gap: "12px",
            margin: "auto",
          }}
        >
          <Divider
            textAlign="left"
            sx={{
              "&:before": { width: 0 },
              "& .MuiDivider-wrapper": { padding: "0 16px 0 0" },
            }}
          >
            <PageTitle fontSize="1rem">Item Details</PageTitle>
          </Divider>
        </div>
      </CustomModal>
    </>
  );
};

ItemModal.propTypes = {
  specificResource: PropTypes.object,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default ItemModal;
