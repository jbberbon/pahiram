import { useEffect, useState } from "react";
import CardListWithTitle from "../../../../Components/Layout/MainDisplay/CardListWithTitle";
import PropTypes from "prop-types";
import useGet from "../../../../Hooks/useGet";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import useGetSpecificResource from "../../../../Hooks/useGetSpecificResource";

import { getSpecificTransactionEndpoint } from "../../../../API/Endpoints/manageBorrowTransaction";
// import ReleaseItemModal from "./ReleaseItemModal";
import FacilitateReturnModal from "./FacilitateReturnModal";

const ForReturnList = ({ sectionTitle, apiEndpoint }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    list,
    isGetListLoading,
    isGetListError,
    setIsGetListError,
    getRequestList,
  } = useGet();

  useEffect(() => {
    getRequestList(apiEndpoint);
  }, []);

  const {
    specificResource,
    isLoadingSpecificResource,
    isErrorSpecificResource,
    setIsErrorSpecificResource,
    fetchSpecificResource,
  } = useGetSpecificResource();

  const fetchTransaction = (transacId) => {
    fetchSpecificResource(
      getSpecificTransactionEndpoint,
      transacId + "?view_individual_items=1"
    );
  };

  return (
    <>
      <CardListWithTitle
        sectionTitle={sectionTitle}
        list={list}
        isLoading={isGetListLoading}
        fetchItemFunction={fetchTransaction}
        setIsModalOpen={setIsModalOpen}
      />
      {(specificResource || !isLoadingSpecificResource) && (
        <FacilitateReturnModal
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

ForReturnList.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  apiEndpoint: PropTypes.string.isRequired,
};

export default ForReturnList;
