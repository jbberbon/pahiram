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

function SpecificRequestModal({
  isModalOpen,
  setModalOpen,
  specificRequestData,
  handleCancelRequest,
  // isSpecificRequestLoading,
}) {
  const [isEditOpen, setEditOpen] = useState(false);
  const { isSm } = BreakpointVariables();
  const transacData = specificRequestData?.transac_data;
  const borrowedItems = specificRequestData?.items;
  const truncatedId = transacData?.id ? transacData?.id.slice(0, 20) : "";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(transacData?.id);
    console.log(borrowedItems);
  };

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

  // console.log("transacData?.transac_status:", transacData?.transac_status);
  // console.log("isOngoing:", isOngoing);
  // console.log("isApproved:", isApproved);
  // console.log("isPendingApproval:", isPendingApproval);
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
            margin: "auto"
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                padding: 0,
                margin: 0,
                whiteSpace: "nowrap",
                minWidth: "110px",
                fontSize: "0.875rem",
              }}
            >
              Request ID
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              {truncatedId}...
            </p>
            <IconButton
              onClick={handleCopyClick}
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                padding: 0,
                margin: 0,
                whiteSpace: "nowrap",
                minWidth: "110px",
                fontSize: "0.875rem",
              }}
            >
              Office
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              {transacData?.department}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                padding: 0,
                margin: 0,
                whiteSpace: "nowrap",
                minWidth: "110px",
                fontSize: "0.875rem",
              }}
            >
              Submitted on
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              {parsedSubmittedDate}
            </p>
          </div>
          {/* <Divider component="p" /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                padding: 0,
                margin: 0,
                whiteSpace: "nowrap",
                minWidth: "110px",
                fontSize: "0.875rem",
              }}
            >
              Purpose
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              {transacData?.user_defined_purpose}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                padding: 0,
                margin: 0,
                whiteSpace: "nowrap",
                minWidth: "110px",
                fontSize: "0.875rem",
              }}
            >
              Endorser
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              {transacData?.endorsed_by?.full_name
                ? transacData?.endorsed_by?.full_name
                : "None"}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                padding: 0,
                margin: 0,
                whiteSpace: "nowrap",
                minWidth: "110px",
                fontSize: "0.875rem",
              }}
            >
              Status
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              {transacStatus?.transac_status}
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
            <PageTitle fontSize="1rem">Borrowed Items</PageTitle>
          </Divider>

          {borrowedItems && (
            <BorrowedItemsTable borrowedItems={borrowedItems} transacStatus={transacData?.transac_status} />
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
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
                onClick={() => {
                  setEditOpen(true);
                  setModalOpen(false);
                  console.log(transacStatus.transac_status);
                }}
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
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
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
                    color: "#D54442"
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
