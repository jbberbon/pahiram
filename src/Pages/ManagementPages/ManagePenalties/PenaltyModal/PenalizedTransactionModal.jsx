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
import usePatch from "../../../../Hooks/usePatch";
import PenalizedItemsTable from "./PenalizedItemsTable";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { patchPayPenaltyEndpoint } from "../../../../API/Endpoints/managePenalizedTransaction";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import SuccessSnackbar from "../../../../Components/Snackbars/SuccessSnackbar";
import { findPenalizedTransacStatus } from "../../../../Utils/HelperFunctions/ConstantFunctions/PenalizedTransacStatusConstantHelper";
import PaymentDetailForm from "./PaymentDetailForm";
import ConfirmationModal from "../../../../Components/CustomModal/ConfirmationModal";
import { formatMoney } from "../../../../Utils/HelperFunctions/formatMoney";

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

  const {
    isPatchSuccess,
    isPatchError,
    isPatchLoading,
    setIsPatchError,
    setIsPatchSuccess,
    handlePatch,
  } = usePatch();

  const endpoint = (transacId) => patchPayPenaltyEndpoint(transacId);

  const { handleSubmit, control, trigger, reset, getValues } = useForm();

  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const openConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  const onSubmit = async () => {
    let requestBody = getValues();
    if (
      requestBody &&
      (requestBody?.remarks === null || requestBody?.remarks === "")
    ) {
      delete requestBody.remarks;
    }

    await handlePatch(endpoint, transacData?.penalized_transac_id, requestBody);
    closeConfirmationModal();
    reset();
    if (!isPatchLoading) {
      setIsModalOpen(false);
      closeConfirmationModal();
    }
  };

  const handleConfirm = async () => {
    const isValid = await trigger("receipt_number");

    if (isValid) {
      // If validation is successful, open the confirmation modal
      openConfirmationModal();
    }
  };

  console.log("penalty status" + transacData?.receipt_number);

  return (
    <>
      <CustomModal
        isModalOpen={isModalOpen}
        setModalOpen={() => {
          setIsModalOpen(false);
          reset();
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

          {transacData && (
            <PaymentDetailForm
              transacData={transacData}
              control={control}
              isPatchLoading={isPatchLoading}
              handleConfirm={handleConfirm}
              onCloseModal={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </CustomModal>

      {isConfirmationModalOpen && (
        <ConfirmationModal
          handleSubmit={handleSubmit(onSubmit)}
          isConfirmationModalOpen={isConfirmationModalOpen}
          closeConfirmationModal={closeConfirmationModal}
        />
      )}

      <SuccessSnackbar
        isSuccess={isPatchSuccess}
        setIsSuccess={setIsPatchSuccess}
      />
      <ErrorSnackbar error={isPatchError} setError={setIsPatchError} />
    </>
  );
};

PenalizedTransactionModal.propTypes = {
  specificResource: PropTypes.object,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default PenalizedTransactionModal;
