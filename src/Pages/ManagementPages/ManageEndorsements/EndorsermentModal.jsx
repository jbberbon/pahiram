import CustomModal from "../../../Components/CustomModal/CustomModal";

import PropTypes from "prop-types";
import BreakpointVariables from "../../../Utils/Theming/BreakpointVariables";
import Divider from "@mui/material/Divider";
import PageTitle from "../../../Components/Text/PageTitle";
import ColorVariables from "../../../Utils/Theming/ColorVariables";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { copyToClipboard } from "../../../Utils/HelperFunctions/copyToClipboard";
import convertDateForHumanConsumption from "../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import { findPurpose } from "../../../Utils/HelperFunctions/ConstantFunctions/BorrowPurposeConstantHelper";
import { findTransacStatus } from "../../../Utils/HelperFunctions/ConstantFunctions/TransacStatusConstantHelper";
import BorrowedItemsTable from "../../BorrowerPages/BorrowRequests/SpecificRequest/BorrowedItemsTable";
import Button from "@mui/material/Button";
import usePatch from "../../../Hooks/usePatch";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import SuccessSnackbar from "../../../Components/Snackbars/SuccessSnackbar";
import { patchEndorsementApprovalEndpoint } from "../../../API/Endpoints/manageEndorsementEndpoints";

const PENDING_ENDORSER_APPROVAL = "PENDING_ENDORSER_APPROVAL";
const EndorsermentModal = ({
  specificResource,
  isModalOpen,
  setIsModalOpen,
}) => {
  const { neutralMain } = ColorVariables();
  const { isSm } = BreakpointVariables();

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

  console.log(items);

  const truncatedId = transacData?.id
    ? transacData?.id.slice(0, 20) + "..."
    : "";

  const parsedSubmittedDate = transacData?.created_at
    ? convertDateForHumanConsumption(transacData?.created_at)
    : "";

  const purpose = findPurpose(transacData?.purpose);

  const transacStatus = findTransacStatus(transacData?.status);

  const {
    isPatchSuccess,
    isPatchError,
    isPatchLoading,
    setIsPatchError,
    setIsPatchSuccess,
    handlePatch,
  } = usePatch();

  const endpoint = (transacId) => patchEndorsementApprovalEndpoint(transacId);
  const approveRequestBody = { approval: true };
  const disapproveRequestBody = { approval: false };

  return (
    <>
      <CustomModal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: isSm ? "20px" : "18px",
            gap: "12px",
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
            <PageTitle fontSize="1rem">Borrow Request Details</PageTitle>
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
            <p style={pStyleBold}>Status</p>
            <p style={pStyleRegular}>{transacStatus?.transac_status}</p>
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

          {items && (
            <BorrowedItemsTable
              borrowedItems={items}
              transacStatus={transacData?.status}
            />
          )}

          {transacData?.status === PENDING_ENDORSER_APPROVAL && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
              }}
            >
              <Button
                onClick={async () => {
                  await handlePatch(
                    endpoint,
                    transacData?.id,
                    disapproveRequestBody
                  );
                  if (!isPatchLoading) {
                    setIsModalOpen(false);
                  }
                }}
                disabled={isPatchLoading}
                color="error"
              >
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Decline Request
                </p>
              </Button>
              <Button
                onClick={async () => {
                  await handlePatch(
                    endpoint,
                    transacData?.id,
                    approveRequestBody
                  );
                  if (!isPatchLoading) {
                    setIsModalOpen(false);
                  }
                }}
                disabled={isPatchLoading}
                color="success"
              >
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Approve Request
                </p>
              </Button>
            </div>
          )}
        </div>
      </CustomModal>
      <SuccessSnackbar
        isSuccess={isPatchSuccess}
        setIsSuccess={setIsPatchSuccess}
      />
      <ErrorSnackbar error={isPatchError} setError={setIsPatchError} />
    </>
  );
};

EndorsermentModal.propTypes = {
  specificResource: PropTypes.object,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default EndorsermentModal;
