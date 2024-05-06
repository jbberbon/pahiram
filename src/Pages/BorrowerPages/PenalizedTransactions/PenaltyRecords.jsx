// import PropTypes from "prop-types";

import InnerMainDisplayLayout from "../../../Components/Layout/MainDisplay/InnerMainDisplayLayout";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import PageTitle from "../../../Components/Text/PageTitle";
import PenalizedTransactionCardList from "./PenalizedTransactionCardList";

const PenaltyRecords = () => {
  return (
    <>
      <MainDisplayLayout>
        <InnerMainDisplayLayout>
          <PageTitle>Penalized Transactions</PageTitle>

          <PenalizedTransactionCardList
            sectionTitle="Pending Payment"
            filter={"status=PENDING_PAYMENT"}
          />

          <PenalizedTransactionCardList
            sectionTitle="Settled Penalties"
            filter={"status=PAID"}
          />
          {/* <FilteredTransactionList
            sectionTitle="Pending Approval"
            filter={"status=" + PENDING_BORROWING_APPROVAL}
          />

          <ForReleaseList
            sectionTitle="For Release"
            apiEndpoint={
              getOfficeTransactionListEndpoint + "?status=" + APPROVED
            }
          />

          <ForReturnList
            sectionTitle="On Going Transactions"
            apiEndpoint={
              getOfficeTransactionListEndpoint + "?status=" + ON_GOING
            }
          />
          
          <FilteredTransactionList
            sectionTitle="Delayed Returns"
            filter={"status=" + ON_GOING}
          />

          <FilteredTransactionList
            sectionTitle="Unreturned"
            filter={"status=" + ON_GOING}
          />

          <FilteredTransactionList
            sectionTitle="Lapsed Approval"
            filter={"is_lapsed=true"}
          />

          <FilteredTransactionList
            sectionTitle="Complete"
            filter={"status=" + TRANSACTION_COMPLETE}
          /> */}
        </InnerMainDisplayLayout>
      </MainDisplayLayout>
    </>
  );
};

// Dashboard.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };

export default PenaltyRecords;
