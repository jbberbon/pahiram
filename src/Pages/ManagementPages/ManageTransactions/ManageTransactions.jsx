import { getOfficeTransactionListEndpoint } from "../../../API/Endpoints/manageBorrowTransaction";
import InnerMainDisplayLayout from "../../../Components/Layout/MainDisplay/InnerMainDisplayLayout";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import PageTitle from "../../../Components/Text/PageTitle";
import ForReturnList from "./FacilitateReturn/ForReturnList";
import FilteredTransactionList from "./FilteredTransactionList";
import ForReleaseList from "./ReleaseItems/ForReleaseList";

const PENDING_BORROWING_APPROVAL = "PENDING_BORROWING_APPROVAL";
const APPROVED = "APPROVED";
const ON_GOING = "ON_GOING";
// const OVERDUE_TRANSACTION_COMPLETION = "OVERDUE_TRANSACTION_COMPLETION";

const ManageTransactions = () => {
  return (
    <>
      <MainDisplayLayout>
        <InnerMainDisplayLayout>
          <PageTitle>Manage Transactions</PageTitle>

          <FilteredTransactionList
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
            sectionTitle="On Going TransactionsX"
            apiEndpoint={
              getOfficeTransactionListEndpoint + "?status=" + ON_GOING
            }
          />
          {/* <FilteredTransactionList
            sectionTitle="On Going Transactions"
            filter={"status=" + ON_GOING}
          /> */}

          {/* Change Filter later */}
          <FilteredTransactionList
            sectionTitle="Delayed Returns"
            filter={"status=" + ON_GOING}
          />

          {/* Change filter later */}
          <FilteredTransactionList
            sectionTitle="Unreturned"
            filter={"status=" + ON_GOING}
          />

          <FilteredTransactionList
            sectionTitle="Lapsed Approval"
            filter={"is_lapsed=true"}
          />
        </InnerMainDisplayLayout>
      </MainDisplayLayout>
    </>
  );
};

export default ManageTransactions;
