import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import CustomModal from "../../../../Components/CustomModal/CustomModal";
import BreakpointVariables from "../../../../Utils/Theming/BreakpointVariables";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import PageTitle from "../../../../Components/Text/PageTitle";
import IconButton from "@mui/material/IconButton";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import { findPurpose } from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowPurposeConstantHelper";
import { copyToClipboard } from "../../../../Utils/HelperFunctions/copyToClipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PenalizedItemsTable from "./PenalizedItemsTable";
import { findPenalizedTransacStatus } from "../../../../Utils/HelperFunctions/ConstantFunctions/PenalizedTransacStatusConstantHelper";
import PaymentDetailForm from "./PaymentDetailForm";
import { formatMoney } from "../../../../Utils/HelperFunctions/formatMoney";

const SETTLED = "SETTLED";
const PAID = "PAID";

const PenalizedTransactionModal = ({
  specificResource,
  isModalOpen,
  setIsModalOpen,
}) => {
  const { isSm } = BreakpointVariables();
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

  const transacData = specificResource?.transac_data;
  const items = specificResource?.items;

  const truncatedId = transacData?.id
    ? transacData?.id.slice(0, 20) + "..."
    : "";

  const parsedSubmittedDate = transacData?.created_at
    ? convertDateForHumanConsumption(transacData?.created_at)
    : "";

  const purpose = findPurpose(transacData?.purpose);
  const penaltyStatus = findPenalizedTransacStatus(transacData?.penalty_status);

  const displayPaymentDetails =
    transacData?.penalty_status === PAID ||
    transacData?.penalty_status === SETTLED;

  return (
    <>
      <CustomModal
        isModalOpen={isModalOpen}
        setModalOpen={() => {
          setIsModalOpen(false);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: isSm ? "20px" : "18px",
            gap: "16px",
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
            <PageTitle fontSize="1rem">Transaction</PageTitle>
          </Divider>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Request ID</p>
            <p style={pStyleRegular}>{isSm ? truncatedId : transacData?.id}</p>
            <IconButton
              onClick={() => copyToClipboard(transacData?.id)}
              sx={{
                marginLeft: "auto",
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <ContentCopyIcon sx={{ fontSize: "14px" }} />
            </IconButton>
          </div>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Borrower</p>
            <p style={pStyleRegular}>{transacData?.borrower}</p>
          </div>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Office</p>
            <p style={pStyleRegular}>{transacData?.department}</p>
          </div>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Submitted on</p>
            <p style={pStyleRegular}>{parsedSubmittedDate}</p>
          </div>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Purpose</p>
            <p style={pStyleRegular}>
              {purpose?.purpose}, {transacData?.user_defined_purpose}
            </p>
          </div>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Endorser</p>
            <p style={pStyleRegular}>
              {transacData?.endorser ? transacData?.endorser : "None"}
            </p>
          </div>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Penalty Status</p>
            <p style={pStyleRegular}>{penaltyStatus?.status}</p>
          </div>

          <div style={flexRowStart}>
            <p style={pStyleBold}>Amount</p>
            <p style={pStyleRegular}>
              {transacData?.penalty ? formatMoney(transacData?.penalty) : ""}
            </p>
          </div>

          <Divider
            textAlign="left"
            sx={{
              "&:before": { width: 0 },
              "& .MuiDivider-wrapper": { padding: "0 16px 0 0" },
              marginTop: "16px",
            }}
          >
            <PageTitle fontSize="1rem">Requested Items</PageTitle>
          </Divider>

          {items && <PenalizedItemsTable items={items} />}

          {transacData && displayPaymentDetails && (
            <PaymentDetailForm transacData={transacData} />
          )}
        </div>
      </CustomModal>
    </>
  );
};

PenalizedTransactionModal.propTypes = {
  specificResource: PropTypes.object,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default PenalizedTransactionModal;
