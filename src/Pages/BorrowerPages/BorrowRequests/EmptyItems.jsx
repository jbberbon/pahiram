import PropTypes from "prop-types";

function EmptyItems({ message }) {
  return (
    <div
      style={{
        width: "100%",
        // height: "70vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontWeight: "400", fontSize: "1rem" }}>
        {message ? message : "Wow such empty in here..."}
      </h3>
    </div>
  );
}
EmptyItems.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyItems;
