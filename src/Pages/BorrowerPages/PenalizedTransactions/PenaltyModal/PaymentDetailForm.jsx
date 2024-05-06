import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import PageTitle from "../../../../Components/Text/PageTitle";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";

const PaymentDetailForm = ({ transacData }) => {
  const { neutralMain } = ColorVariables();

  const flexRowStart = {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
  };
  const pStyleBold = {
    fontWeight: "700",
    padding: 0,
    margin: 0,
    whiteSpace: "nowrap",
    minWidth: "110px",
    fontSize: "0.875rem",
    color: neutralMain,
  };
  const pStyleRegular = {
    padding: 0,
    margin: 0,
    fontSize: "0.875rem",
    color: neutralMain,
  };
  
  return (
    <>
      <Divider
        textAlign="left"
        sx={{
          "&:before": { width: 0 },
          "& .MuiDivider-wrapper": { padding: "0 16px 0 0" },
        }}
      >
        <PageTitle fontSize="1rem">Payment Details</PageTitle>
      </Divider>

      <>
        <div style={flexRowStart}>
          <p style={pStyleBold}>Receipt</p>
          <p style={pStyleRegular}>{transacData?.receipt_number}</p>
        </div>
        <div style={flexRowStart}>
          <p style={pStyleBold}>Settled On</p>
          <p style={pStyleRegular}>
            {transacData?.paid_at
              ? convertDateForHumanConsumption(transacData?.paid_at)
              : transacData?.settled_at
              ? convertDateForHumanConsumption(transacData?.settled_at)
              : "n/a"}
          </p>
        </div>
        <div style={flexRowStart}>
          <p style={pStyleBold}>Remarks</p>
          <p style={pStyleRegular}>
            {transacData?.remarks_by_finance_supervisor ||
              transacData?.remarks_by_cashier ||
              "n/a"}
          </p>
        </div>
      </>
    </>
  );
};

PaymentDetailForm.propTypes = {
  transacData: PropTypes.object.isRequired,
};

export default PaymentDetailForm;
