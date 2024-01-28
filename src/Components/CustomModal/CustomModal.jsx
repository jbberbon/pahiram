import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BreakpointVariables from "../../Utils/Theming/BreakpointVariables";
import ColorVariables from "../../Utils/Theming/ColorVariables";

import styles from "./CustomModal.module.css";
import PropTypes from "prop-types";

const CustomModal = ({
  children,
  isModalOpen,
  setModalOpen,
  desktopWidth,
  customStyles,
}) => {
  const { neutralBackground } = ColorVariables();

  const { isMd } = BreakpointVariables();

  const closeModal = () => {
    setModalOpen(false);
  };

  console.log(customStyles);

  return (
    <div>
      {isModalOpen && (
        <>
          <div className={styles.modalOverlay} />
          <div
            className={styles.modal}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: neutralBackground,
              width: isMd ? "90%" : desktopWidth ? desktopWidth : "50%",
              maxHeight: "95%",
              overflowY: "auto", // Add this line
              ...(customStyles &&
                Object.keys(customStyles).length > 0 &&
                customStyles),
            }}
          >
            <div
              style={{
                position: "fixed",
                top: "8px",
                right: "8px",
                backgroundColor: neutralBackground,
              }}
            >
              <IconButton onClick={closeModal}>
                <CloseRoundedIcon />
              </IconButton>
            </div>
            {children}
          </div>
        </>
      )}
    </div>
  );
};

CustomModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  desktopWidth: PropTypes.string,
  customStyles: PropTypes.object,
};

export default CustomModal;
