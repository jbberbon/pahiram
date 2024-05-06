import PropTypes from "prop-types";
import CustomModal from "../../../../Components/CustomModal/CustomModal";
import PageTitle from "../../../../Components/Text/PageTitle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import BreakpointVariables from "../../../../Utils/Theming/BreakpointVariables";
import { useState } from "react";
import EditRequestModal from "../EditRequest/EditRequestModal";
import { findTransacStatus } from "../../../../Utils/HelperFunctions/ConstantFunctions/TransacStatusConstantHelper";
import BorrowedItemsTable from "./BorrowedItemsTable";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import { copyToClipboard } from "../../../../Utils/HelperFunctions/copyToClipboard";

function SpecificRequestModal({
  isModalOpen,
  setModalOpen,
  specificRequestData,
  handleCancelRequest,
  // isSpecificRequestLoading,
}) {
  const { neutralMain } = ColorVariables();
  const [isEditOpen, setEditOpen] = useState(false);
  const { isSm } = BreakpointVariables();
  const transacData = specificRequestData?.transac_data;
  const borrowedItems = specificRequestData?.items;

  const flexRowCenter = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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

  const truncatedId = transacData?.id
    ? transacData?.id.slice(0, 20) + "..."
    : "";

  const parsedSubmittedDate = transacData?.created_at
    ? convertDateForHumanConsumption(transacData?.created_at)
    : "";

  const transacStatus = findTransacStatus(transacData?.transac_status);

  const pendingEndorserApproval = "PENDING_ENDORSER_APPROVAL";
  const pendingBorrowApproval = "PENDING_BORROWING_APPROVAL";
  const approvedTransac = "APPROVED";
  const onGoing = "ON_GOING";
  const activeStatuses = [
    pendingEndorserApproval,
    pendingBorrowApproval,
    approvedTransac,
    onGoing,
  ];

  const isOngoing = transacData?.transac_status === onGoing;
  const isApproved = transacData?.transac_status === approvedTransac;
  const isPendingApproval =
    transacData?.transac_status === pendingBorrowApproval &&
    transacData?.endorsed_by?.full_name !== undefined;
  const isEditDisabled = isOngoing || isApproved || isPendingApproval;

  return (
    <>
      <CustomModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
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
              // marginTop: "16px",
            }}
          >
            <PageTitle fontSize="1rem">Borrow Request Details</PageTitle>
          </Divider>
          <div style={flexRowCenter}>
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

          <div style={flexRowCenter}>
            <p style={pStyleBold}>Office</p>
            <p style={pStyleRegular}>{transacData?.department}</p>
          </div>

          <div style={flexRowCenter}>
            <p style={pStyleBold}>Submitted on</p>
            <p style={pStyleRegular}>{parsedSubmittedDate}</p>
          </div>

          <div style={flexRowCenter}>
            <p style={pStyleBold}>Purpose</p>
            <p style={pStyleRegular}>{transacData?.user_defined_purpose}</p>
          </div>

          <div style={flexRowCenter}>
            <p style={pStyleBold}>Endorser</p>
            <p style={pStyleRegular}>
              {transacData?.endorsed_by?.full_name
                ? transacData?.endorsed_by?.full_name
                : "None"}
            </p>
          </div>

          <div style={flexRowCenter}>
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
            <PageTitle fontSize="1rem">Borrowed Items</PageTitle>
          </Divider>

          {borrowedItems && (
            <BorrowedItemsTable
              borrowedItems={borrowedItems}
              transacStatus={transacData?.transac_status}
            />
          )}

          {activeStatuses.includes(transacData?.transac_status) && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
              }}
            >
              <Button
                // Disable EDIT BUTTON IF
                // 01. On going transaction
                // 02. Approved Transaction
                // 03. Pending Borrowing approval but has an endorser (meaning already approved by endorser)
                disabled={isEditDisabled}
                onClick={() => {
                  setEditOpen(true);
                  setModalOpen(false);
                  console.log(transacStatus.transac_status);
                }}
                color="success"
              >
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Edit Request
                </p>
              </Button>
              <Button
                color="error"
                onClick={() => {
                  handleCancelRequest(transacData.id);
                  setModalOpen(false);
                }}
              >
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Cancel Request
                </p>
              </Button>
            </div>
          )}
        </div>
      </CustomModal>

      {specificRequestData && (
        <EditRequestModal
          isEditOpen={isEditOpen}
          setEditOpen={setEditOpen}
          specificRequestData={specificRequestData}
        />
      )}
    </>
  );
}

SpecificRequestModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  specificRequestData: PropTypes.object.isRequired,
  handleCancelRequest: PropTypes.func.isRequired,
  // isSpecificRequestLoading: PropTypes.bool.isRequired,
};

export default SpecificRequestModal;
