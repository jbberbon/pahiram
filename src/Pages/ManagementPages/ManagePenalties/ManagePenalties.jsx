import InnerMainDisplayLayout from "../../../Components/Layout/MainDisplay/InnerMainDisplayLayout";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import PageTitle from "../../../Components/Text/PageTitle";
import {
  getPaidStatus,
  getPendingPaymentStatus,
  // getUnpaidStatus,
} from "../../../Utils/HelperFunctions/ConstantFunctions/PenalizedTransacStatusConstantHelper";
import PenaltyTable from "./PenaltyTable";

const PENDING_PAYMENT = getPendingPaymentStatus();
// const UNPAID = getUnpaidStatus();
const PAID = getPaidStatus();

const ManagePenalties = () => {
  // const unpaidPopoverMessage =
  //   "Delinquents that are no longer able to pay their respective penalty";
  // const settledPopoverMessage =
  //   "Penalties that are already either paid or settled";
  return (
    <>
      <MainDisplayLayout>
        <InnerMainDisplayLayout>
          <PageTitle>Penalty Clearance</PageTitle>

          <PageTitle fontSize={"1.2rem"}>Pending Payment</PageTitle>
          <PenaltyTable apiFilter={PENDING_PAYMENT} />

          {/* <PageTitle fontSize={"1.2rem"} popoverMessage={unpaidPopoverMessage}>
            Unpaid Penalties
          </PageTitle>
          <PenaltyTable apiFilter={UNPAID} /> */}

          <PageTitle fontSize={"1.2rem"}>Settled Penalties</PageTitle>
          <PenaltyTable apiFilter={PAID} />
        </InnerMainDisplayLayout>
      </MainDisplayLayout>
    </>
  );
};

export default ManagePenalties;
