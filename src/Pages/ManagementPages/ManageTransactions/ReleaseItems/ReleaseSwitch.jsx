import Switch from "@mui/material/Switch";
import PropTypes from "prop-types";
// import { useState } from "react";

const ReleaseSwitch = ({ isChecked, isDisabled, onChange }) => {
  return (
    <Switch
      color="success"
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
  );
};

ReleaseSwitch.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReleaseSwitch;
