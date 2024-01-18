import { useState } from "react";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import InnerMainDisplayLayout from "../../../Components/Layout/MainDisplay/InnerMainDisplayLayout";
import RequestItemCard from "./RequestItemCard";
import EmptyItems from "./EmptyItems";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import useGetBorrowRequests from "../../../Hooks/BorrowRequestHooks/useGetBorrowRequests";
import useGetSpecificBorrowRequest from "../../../Hooks/BorrowRequestHooks/useGetSpecificBorrowRequest";
import PageTitle from "../../../Components/Text/BorrowRequestsTitle";
import SpecificRequestModal from "./SpecificRequest/SpecificRequestModal";
import useCancelRequest from "../../../Hooks/BorrowRequestHooks/useCancelRequest";
import SuccessSnackbar from "../../../Components/Snackbars/SuccessSnackbar";

function BorrowRequests() {
  // const { isSm } = BreakpointVariables();

  const [isModalOpen, setModalOpen] = useState(false);

  const {
    borrowRequestList,
    isErrorRequestList,
    setErrorRequestList,
    // getRequestList,
    isLoadingRequestList,
  } = useGetBorrowRequests();

  const {
    // isSpecificRequestLoading,
    specificRequest,
    isErrorSpecificRequest,
    fetchSpecificRequest,
    setErrorSpecificRequest,
  } = useGetSpecificBorrowRequest();

  const {
    isCancelSuccess,
    isCancelError,
    setCancelSuccess,
    setCancelError,
    handleCancelRequest,
    isLoading,
  } = useCancelRequest();

  const pendingEndorserApproval = "PENDING_ENDORSER_APPROVAL";
  const pendingBorrowApproval = "PENDING_BORROWING_APPROVAL";
  const approvedTransac = "APPROVED";
  const onGoing = "ON_GOING";
  const overdueTransac = "OVERDUE_TRANSACTION_COMPLETION";
  const validStatuses = [
    pendingEndorserApproval,
    pendingBorrowApproval,
    approvedTransac,
    onGoing,
    overdueTransac,
  ];

  const filteredActiveRequests = borrowRequestList?.filter((request) =>
    validStatuses.includes(request.transac_status)
  );

  const filteredPreviousRequests = borrowRequestList?.filter(
    (request) => !validStatuses.includes(request.transac_status)
  );

  return (
    <MainDisplayLayout>
      <InnerMainDisplayLayout>
        <PageTitle>Borrow Requests</PageTitle>
        <PageTitle fontSize={"1.2rem"}>On-going Requests</PageTitle>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {borrowRequestList?.length > 0 &&
          filteredActiveRequests?.length > 0 ? (
            filteredActiveRequests.map((request) => (
              <RequestItemCard
                key={request?.id}
                transacId={request?.id}
                submitDate={request?.created_at}
                department={request?.department}
                endorser={request?.endorsed_by}
                onClick={() => {
                  fetchSpecificRequest(request?.id);
                  if (!isLoading) {
                    setModalOpen(true);
                  }
                }}
              />
            ))
          ) : isLoadingRequestList ? (
            <EmptyItems message="Fetching data. Please wait" />
          ) : (
            <EmptyItems message="You have no active request" />
          )}
        </div>

        <span></span>
        <PageTitle fontSize={"1.2rem"}>Previous Requests</PageTitle>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {borrowRequestList?.length > 0 &&
          filteredPreviousRequests?.length > 0 ? (
            filteredPreviousRequests.map((request) => (
              <RequestItemCard
                key={request?.id}
                transacId={request?.id}
                submitDate={request?.created_at}
                department={request?.department}
                endorser={request?.endorsed_by}
                onClick={() => {
                  fetchSpecificRequest(request?.id);
                  if (!isLoading) {
                    setModalOpen(true);
                  }
                }}
              />
            ))
          ) : isLoadingRequestList ? (
            <EmptyItems message="Fetching data. Please wait" />
          ) : (
            <EmptyItems message="You have no previous request" />
          )}
        </div>

        <SpecificRequestModal
          // isSpecificRequestLoading={isSpecificRequestLoading}
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          specificRequestData={specificRequest}
          handleCancelRequest={handleCancelRequest}
          // getRequestList={() => getRequestList}
        />

        {/*
         * Snackbars
         */}
        <SuccessSnackbar
          isSuccess={isCancelSuccess}
          setIsSuccess={setCancelSuccess}
          successMessage={isCancelSuccess}
        />
        <ErrorSnackbar
          error={isErrorRequestList}
          setError={setErrorRequestList}
        />
        <ErrorSnackbar
          error={isErrorSpecificRequest}
          setError={setErrorSpecificRequest}
        />
        <ErrorSnackbar error={isCancelError} setError={setCancelError} />
      </InnerMainDisplayLayout>
    </MainDisplayLayout>
  );
}

export default BorrowRequests;
