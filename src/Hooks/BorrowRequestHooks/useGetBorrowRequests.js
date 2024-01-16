import { useState, useEffect } from "react";
import { getRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls";
import { getBorrowListEndpoint } from "../../API/Endpoints/borrowRequestEndpoints";

const useGetBorrowRequests = () => {
  const [borrowRequestList, setBorrowRequestList] = useState([]);
  const [isErrorRequestList, setErrorRequestList] = useState(null);
  const [isLoadingRequestList, setLoadingRequestList] = useState(false);

  const getRequestList = async () => {
    try {
      setLoadingRequestList(true);
      const endpoint = getBorrowListEndpoint;
      const response = await getRequest(endpoint);

      if (response?.status === false) {
        setErrorRequestList(response?.message);
      }
      setBorrowRequestList(response?.data);

      setLoadingRequestList(false);
    } catch (error) {
      setErrorRequestList(error);
      console.error("Error fetching borrow requests:", error);
      setLoadingRequestList(false);
    }
  };

  useEffect(() => {
    getRequestList();
  }, []);

  return {
    isLoadingRequestList,
    borrowRequestList,
    isErrorRequestList,
    setErrorRequestList,
    getRequestList,
  };
};

export default useGetBorrowRequests;
