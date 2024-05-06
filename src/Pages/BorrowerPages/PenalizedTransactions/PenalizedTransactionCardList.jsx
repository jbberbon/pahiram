import { useEffect, useState } from "react";
import useGet from "../../../Hooks/useGet";
import useGetSpecificResource from "../../../Hooks/useGetSpecificResource";
import PageTitle from "../../../Components/Text/PageTitle";
import { CircularProgress } from "@mui/material";
import EndorsementItemCard from "../../ManagementPages/ManageEndorsements/EndorsementItemCard";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import PropTypes from "prop-types";
import {
  getPenalizedTransacListEndpoint,
  getSpecificPenalizedTransacEndpoint,
} from "../../../API/Endpoints/borrowRequestEndpoints";
import PenalizedTransactionModal from "./PenaltyModal/PenalizedTransactionModal";

const PenalizedTransactionCardList = ({ filter, sectionTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    list,
    isGetListLoading,
    isGetListError,
    setIsGetListError,
    getRequestList,
  } = useGet();

  const getFilter = filter ? "?" + filter : "";

  useEffect(() => {
    getRequestList(getPenalizedTransacListEndpoint + getFilter);
  }, []);

  const {
    specificResource,
    isLoadingSpecificResource,
    isErrorSpecificResource,
    setIsErrorSpecificResource,
    fetchSpecificResource,
  } = useGetSpecificResource();

  const specificResourceEndpoint = (transacId) =>
    getSpecificPenalizedTransacEndpoint(transacId);

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
            {list?.length > 0 &&
              list?.map((request) => (
                // Used endorser card as it just displays same data
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
            {list?.length === 0 && (
              <p style={{ width: "100%", textAlign: "center" }}>
                No requests found.
              </p>
            )}
          </>
        )}
      </div>

      {specificResource && (
        <PenalizedTransactionModal
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

PenalizedTransactionCardList.propTypes = {
  filter: PropTypes.string,
  sectionTitle: PropTypes.string.isRequired,
};

export default PenalizedTransactionCardList;
