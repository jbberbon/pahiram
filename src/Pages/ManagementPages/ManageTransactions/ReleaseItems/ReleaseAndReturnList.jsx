import { CircularProgress } from "@mui/material";
import PageTitle from "../../../../Components/Text/PageTitle";
import { useEffect, useState } from "react";
import {
  getOfficeTransactionListEndpoint,
  getSpecificTransactionEndpoint,
} from "../../../../API/Endpoints/manageBorrowTransaction";
import useGet from "../../../../Hooks/useGet";
import EndorsementItemCard from "../../ManageEndorsements/EndorsementItemCard";
import useGetSpecificResource from "../../../../Hooks/useGetSpecificResource";
import TransactionModal from "../TransactionModal";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import PropTypes from "prop-types";

const APPROVED = "APPROVED";

const ReleaseAndReturnList = ({ filter, sectionTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReleaseModalOpen, setIsReleaseModalOpen] = useState(false);

  const {
    list,
    isGetListLoading,
    isGetListError,
    setIsGetListError,
    getRequestList,
  } = useGet();

  const getFilter = filter ? "?" + filter : "";

  useEffect(() => {
    getRequestList(getOfficeTransactionListEndpoint + getFilter);
  }, []);

  const {
    specificResource,
    isLoadingSpecificResource,
    isErrorSpecificResource,
    setIsErrorSpecificResource,
    fetchSpecificResource,
  } = useGetSpecificResource();

  const specificResourceEndpoint = (transacId) =>
    getSpecificTransactionEndpoint(transacId);

  console.log(isReleaseModalOpen);
  return (
    <>
      <PageTitle fontSize={"1.2rem"}>{sectionTitle}</PageTitle>
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
            {list.length > 0 &&
              list.map((request) => (
                // Used endorser card as it just displays same data
                <EndorsementItemCard
                  key={request?.id}
                  transacData={request}
                  onClick={() => {
                    fetchSpecificResource(
                      specificResourceEndpoint,
                      request?.id
                    );
                    if (request?.status === APPROVED) {
                      if (!isLoadingSpecificResource) {
                        setIsReleaseModalOpen(true);
                      }
                    } else {
                      if (!isLoadingSpecificResource) {
                        setIsModalOpen(true);
                      }
                    }
                    // console.log(request?.id);
                  }}
                />
              ))}
            {list.length === 0 && (
              <p style={{ width: "100%", textAlign: "center" }}>
                No requests found.
              </p>
            )}
          </>
        )}
      </div>

      {specificResource && (
        <TransactionModal
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
    </>
  );
};

ReleaseAndReturnList.propTypes = {
  filter: PropTypes.string,
  sectionTitle: PropTypes.string.isRequired,
};

export default ReleaseAndReturnList;
