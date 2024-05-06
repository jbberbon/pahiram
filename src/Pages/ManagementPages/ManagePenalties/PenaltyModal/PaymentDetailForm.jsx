import { Button, Divider, TextField } from "@mui/material";
import PageTitle from "../../../../Components/Text/PageTitle";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";

const PaymentDetailForm = ({
  transacData,
  control,
  isPatchLoading,
  handleConfirm,
  onCloseModal,
}) => {
  const { neutralMain, neuetralBackground } = ColorVariables();

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

      {transacData?.penalty_status !== "UNPAID" &&
        transacData?.penalty_status !== "PENDING_PAYMENT" && (
          <>
            <div style={flexRowStart}>
              <p style={pStyleBold}>Receipt</p>
              <p style={pStyleRegular}>{transacData?.receipt_number}</p>
            </div>
            <div style={flexRowStart}>
              <p style={pStyleBold}>Settled On</p>
              <p style={pStyleRegular}>
                {convertDateForHumanConsumption(transacData?.paid_at) ||
                  convertDateForHumanConsumption(transacData?.settled_at)}
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
        )}

      {(transacData?.penalty_status === "UNPAID" ||
        transacData?.penalty_status === "PENDING_PAYMENT") && (
        <form
          //   onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Controller
            name="receipt_number"
            control={control}
            defaultValue={transacData?.receipt_number || ""}
            rules={{
              required: "Receipt number is required",
              minLength: {
                value: 5,
                message: "Receipt number should be at least 5 characters",
              },
              maxLength: {
                value: 30,
                message: "Receipt number should not exceed 30 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s-]+$/,
                message: "Only letters, numbers, and hyphens are allowed.",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Receipt Number"
                variant="standard"
                type="text"
                disabled={
                  transacData?.penalty_status === "PAID" ||
                  transacData?.penalty_status === "SETTLED"
                }
                error={Boolean(fieldState?.error)}
                helperText={fieldState?.error?.message}
                sx={{ width: "100%" }}
              />
            )}
          />

          <Controller
            name="remarks"
            control={control}
            // defaultValue={transacData?.receipt_number || ""}
            defaultValue={""}
            rules={{
              minLength: {
                value: 5,
                message: "Remarks should be at least 5 characters",
              },
              maxLength: {
                value: 30,
                message: "Remarks should not exceed 30 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s-]+$/,
                message: "Only letters, numbers, and hyphens are allowed.",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Cashier Remarks"
                variant="standard"
                type="text"
                disabled={
                  transacData?.penalty_status === "PAID" ||
                  transacData?.penalty_status === "SETTLED"
                }
                error={Boolean(fieldState?.error)}
                helperText={fieldState?.error?.message}
                sx={{ width: "100%" }}
              />
            )}
          />

          {transacData?.penalty_status !== "PAID" &&
            transacData?.penalty_status !== "SETTLED" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "8px",
                }}
              >
                <Button onClick={onCloseModal} color="error">
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                    }}
                  >
                    Cancel
                  </p>
                </Button>
                <Button
                  onClick={handleConfirm}
                  color="success"
                  disabled={isPatchLoading}
                  variant="contained"
                >
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                      color: neuetralBackground,
                    }}
                  >
                    Mark as Paid
                  </p>
                </Button>
              </div>
            )}
        </form>
      )}
    </>
  );
};

PaymentDetailForm.propTypes = {
  transacData: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  isPatchLoading: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default PaymentDetailForm;
