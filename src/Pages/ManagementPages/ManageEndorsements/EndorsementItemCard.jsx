import ItemCard from "../../../Components/ItemCard/ItemCard";
import PropTypes from "prop-types";
import convertDateForHumanConsumption from "../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import { findPurpose } from "../../../Utils/HelperFunctions/ConstantFunctions/BorrowPurposeConstantHelper";

const pTagStyles = {
  padding: "4px 4px 4px 0",
  margin: 0,
  fontWeight: "500",
  color: "#f3f4f6",
};

const EndorsementItemCard = ({ transacData, onClick }) => {
  const slicedTransacId = `${transacData?.id.slice(
    0,
    8
  )}...${transacData?.id.slice(-8)}`;
  const parsedDate = convertDateForHumanConsumption(transacData?.created_at);

  const purpose = findPurpose(transacData?.purpose);
  const userDefinedPurpose = `${
    transacData?.user_defined_purpose?.length > 30
      ? transacData?.user_defined_purpose?.slice(0, 30) + "..."
      : transacData?.user_defined_purpose
  }`;
  return (
    <ItemCard onClick={onClick}>
      <div
        style={{
          padding: "12px",
        }}
      >
        <h4
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap", // Keep the text on a single line
            margin: 0,
            padding: "4px 4px 4px 0",
            color: "#f3f4f6",
          }}
        >
          {slicedTransacId}
        </h4>
        <p style={pTagStyles}>{transacData?.borrower}</p>
        <p style={pTagStyles}>
          For {purpose?.purpose}, {userDefinedPurpose}
        </p>

        <p style={pTagStyles}>Sumitted on {parsedDate}</p>
      </div>
    </ItemCard>
  );
};

EndorsementItemCard.propTypes = {
  transacData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default EndorsementItemCard;
