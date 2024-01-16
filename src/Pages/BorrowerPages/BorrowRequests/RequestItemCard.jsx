import ItemCard from "../../../Components/ItemCard/ItemCard";
import convertDateForHumanConsumption from "../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import PropTypes from "prop-types";

function RequestItemCard({
  transacId,
  submitDate,
  department,
  endorser,
  onClick,
}) {
  const parsedDate = convertDateForHumanConsumption(submitDate);

  const slicedTransacId = `${transacId.slice(0, 8)}...${transacId.slice(-8)}`;
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
          }}
        >
          Request - {slicedTransacId}
        </h4>
        <p
          style={{
            padding: "4px 4px 4px 0",
            margin: 0,
            fontWeight: "500",
            overflow: "hidden",
          }}
        >
          {department}
        </p>
        <p
          style={{
            padding: "4px 4px 4px 0",
            margin: 0,
            fontWeight: "500",
          }}
        >
          Sumitted on {parsedDate}
        </p>
        <p
          style={{
            padding: "4px 4px 4px 0",
            margin: 0,
            fontWeight: "600",
          }}
        >
          <em>
            Endorsed by{" "}
            {endorser?.full_name ? `Mr/Ms ${endorser.full_name}` : "None"}
          </em>
        </p>
      </div>
    </ItemCard>
  );
}

RequestItemCard.propTypes = {
  transacId: PropTypes.string.isRequired,
  submitDate: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  endorser: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default RequestItemCard;
