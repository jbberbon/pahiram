import { useEffect, useState } from "react";
import InnerMainDisplayLayout from "../../../Components/Layout/MainDisplay/InnerMainDisplayLayout";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import PageTitle from "../../../Components/Text/PageTitle";
import useGet from "../../../Hooks/useGet";
import {
  getEndorsementList,
  getSpecificEndorsementEndpoint,
} from "../../../API/Endpoints/manageEndorsementEndpoints";
import EndorsementItemCard from "./EndorsementItemCard";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import { CircularProgress } from "@mui/material";
import useGetSpecificResource from "../../../Hooks/useGetSpecificResource";
import EndorsermentModal from "./EndorsermentModal";

const ManageEndorsements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PENDING_ENDORSER_APPROVAL = "PENDING_ENDORSER_APPROVAL";
  const DISAPPROVED = "DISAPPROVED";

  const {
    list,
    isGetListLoading,
    isGetListError,
    setIsGetListError,
    getRequestList,
  } = useGet();

  useEffect(() => {
    getRequestList(getEndorsementList);
  }, []);

  const specificResourceEndpoint = (transacId) =>
    getSpecificEndorsementEndpoint(transacId);
  const {
    specificResource,
    isLoadingSpecificResource,
    isErrorSpecificResource,
    setIsErrorSpecificResource,
    fetchSpecificResource,
  } = useGetSpecificResource();

  const disapprovedList = list.filter(
    (request) => request?.status === DISAPPROVED
  );

  const pendingApprovalList = list.filter(
    (request) => request?.status === PENDING_ENDORSER_APPROVAL
  );

  const pastRequestList = list.filter((request) => {
    return (
      request?.status !== DISAPPROVED &&
      request?.status !== PENDING_ENDORSER_APPROVAL
    );
  });

  return (
    <MainDisplayLayout>
      <InnerMainDisplayLayout>
        <PageTitle>Manage Endorsements</PageTitle>
        <PageTitle fontSize={"1.2rem"}>Pending Approval</PageTitle>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {isGetListLoading ? (
            <CircularProgress />
          ) : (
            <>
              {pendingApprovalList.length > 0 &&
                pendingApprovalList.map((request) => (
                  <EndorsementItemCard
                    key={request?.id}
                    transacData={request}
                    onClick={() => {
                      fetchSpecificResource(
                        specificResourceEndpoint,
                        request?.id
                      );
                      if (!isLoadingSpecificResource) {
                        setIsModalOpen(true);
                      }
                    }}
                  />
                ))}
              {pendingApprovalList.length === 0 && (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No pending requests found.
                </p>
              )}
            </>
          )}
        </div>

        <PageTitle fontSize={"1.2rem"}>Declined Requests</PageTitle>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {isGetListLoading ? (
            <CircularProgress />
          ) : (
            <>
              {disapprovedList.length > 0 &&
                disapprovedList.map((request) => (
                  <EndorsementItemCard
                    key={request?.id}
                    transacData={request}
                    onClick={() => {
                      fetchSpecificResource(
                        specificResourceEndpoint,
                        request?.id
                      );
                      if (!isLoadingSpecificResource) {
                        setIsModalOpen(true);
                      }
                    }}
                  />
                ))}
              {/* Render empty message if the filtered list is empty */}
              {disapprovedList.length === 0 && (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No disapproved requests found.
                </p>
              )}
            </>
          )}
        </div>

        <PageTitle fontSize={"1.2rem"}>Past Requests</PageTitle>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {isGetListLoading ? (
            <CircularProgress />
          ) : (
            <>
              {pastRequestList.length > 0 &&
                pastRequestList.map((request) => (
                  <EndorsementItemCard
                    key={request?.id}
                    transacData={request}
                    onClick={() => {
                      fetchSpecificResource(
                        specificResourceEndpoint,
                        request?.id
                      );
                      if (!isLoadingSpecificResource) {
                        setIsModalOpen(true);
                      }
                    }}
                  />
                ))}
              {pastRequestList.length === 0 && (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No previous requests found.
                </p>
              )}
            </>
          )}
        </div>
      </InnerMainDisplayLayout>
      {specificResource && (
        <EndorsermentModal
          specificResource={specificResource}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <ErrorSnackbar error={isGetListError} setError={setIsGetListError} />
      <ErrorSnackbar
        error={isErrorSpecificResource}
        setError={setIsErrorSpecificResource}
      />
    </MainDisplayLayout>
  );
};

export default ManageEndorsements;
