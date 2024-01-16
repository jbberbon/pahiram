import PropTypes from "prop-types";
import CustomModal from "../../../../Components/CustomModal/CustomModal";
import PageTitle from "../../../../Components/Text/BorrowRequestsTitle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import Divider from "@mui/material/Divider";

import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import BreakpointVariables from "../../../../Utils/Theming/BreakpointVariables";
import { useState } from "react";
import EditRequestModal from "../EditRequest/EditRequestModal";

function SpecificRequestModal({
  isModalOpen,
  setModalOpen,
  specificRequestData,
  handleCancelRequest,
  // isSpecificRequestLoading,
}) {
  const [isEditOpen, setEditOpen] = useState(false);
  const { isSm } = BreakpointVariables();
  const truncatedId = specificRequestData?.id
    ? specificRequestData.id.slice(0, 20)
    : "";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(specificRequestData?.id);
  };

  const parsedSubmittedDate = specificRequestData?.created_at
    ? convertDateForHumanConsumption(specificRequestData?.created_at)
    : "";
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
          }}
        >
          <PageTitle fontSize="1rem">Borrow Request Details</PageTitle>
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
              }}
            >
              Request ID
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
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
              }}
            >
              Office
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              {specificRequestData?.department}
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
              }}
            >
              Submitted on
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
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
              }}
            >
              Purpose
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              {specificRequestData?.user_defined_purpose}
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
              }}
            >
              Endorser
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              {specificRequestData?.endorsed_by?.full_name
                ? specificRequestData?.endorsed_by?.full_name
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
              }}
            >
              Status
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              {specificRequestData?.transac_status}
            </p>
          </div>
          {(specificRequestData?.transac_status == 1010 ||
            specificRequestData?.transac_status === 2020) && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
                onClick={() => {
                  // console.log(specificRequestData)
                  setEditOpen(true);
                  setModalOpen(false);
                }}
              >
                Edit Request
              </Button>
              <Button
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
                onClick={() => {
                  handleCancelRequest(specificRequestData.id);
                  setModalOpen(false);
                }}
              >
                Cancel Request
              </Button>
            </div>
          )}
        </div>
      </CustomModal>
      <EditRequestModal
        isEditOpen={isEditOpen}
        setEditOpen={setEditOpen}
        specificRequestData={specificRequestData}
      />
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
