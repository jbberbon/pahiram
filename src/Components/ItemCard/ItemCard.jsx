import PropTypes from "prop-types";
// import convertDateForHumanConsumption from "../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import ColorVariables from "../../Utils/Theming/ColorVariables";
// import OFFICES from "../../Utils/Constants/OFFICES";
// import findOfficeByCode from "../../Utils/HelperFunctions/OfficeFunctions/findOfficeByCode";

import backgroundImage from "/assets/subtle-prism.svg";

function ItemCard({ children, onClick }) {
  const { neutralBackground } = ColorVariables();
  return (
    <div
      style={{
        flex: "1 1 20rem",
        boxShadow: "4px 4px 7px 2px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        backgroundColor: neutralBackground,
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
}

ItemCard.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemCard;
