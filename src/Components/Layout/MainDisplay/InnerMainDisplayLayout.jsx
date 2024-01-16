import PropTypes from "prop-types";

function InnerMainDisplayLayout({ bgColor, children }) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor ? bgColor : "transparent",
        padding: "16px",
        width: "100%",
        gap: "16px",
      }}
    >
      {children}
    </div>
  );
}

InnerMainDisplayLayout.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node
};

export default InnerMainDisplayLayout;
