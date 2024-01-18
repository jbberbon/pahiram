import BreakpointVariables from "../../Utils/Theming/BreakpointVariables";
import ColorVariables from "../../Utils/Theming/ColorVariables";

import styles from "./CustomModal.module.css";
import PropTypes from "prop-types";

const CustomModal = ({ children, isModalOpen, setModalOpen }) => {
  const { neutralBackground } = ColorVariables();

  const { isMd, } = BreakpointVariables();

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {isModalOpen && (
        <>
          <div className={styles.modalOverlay} onClick={closeModal}></div>
          <div
            className={styles.modal}
            style={{
              backgroundColor: neutralBackground,
              width: isMd ? "90%" : "50%",
            }}
          >
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
};

export default CustomModal;
