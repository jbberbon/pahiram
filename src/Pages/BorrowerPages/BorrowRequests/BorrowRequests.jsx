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

  const filteredActiveRequests = borrowRequestList?.filter(
    (request) =>
      request.transac_status === 1010 || request.transac_status === 2020
  );

  const filteredPreviousRequests = borrowRequestList?.filter(
    (request) =>
      request.transac_status !== 1010 || request.transac_status !== 2020
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
            borrowRequestList
              .filter(
                (request) =>
                  request.transac_status === 1010 ||
                  request.transac_status === 2020
              )
              .map((request) => (
                <RequestItemCard
                  key={request.id}
                  transacId={request.id}
                  submitDate={request.created_at}
                  department={request.department}
                  endorser={request?.endorsed_by}
                  onClick={() => {
                    fetchSpecificRequest(request.id);
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
            borrowRequestList
              .filter(
                (request) =>
                  request.transac_status !== 1010 &&
                  request.transac_status !== 2020
              )
              .map((request) => (
                <RequestItemCard
                  key={request.id}
                  transacId={request.id}
                  submitDate={request.created_at}
                  department={request.department}
                  endorser={request?.endorsed_by}
                  onClick={() => {
                    fetchSpecificRequest(request.id);
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
