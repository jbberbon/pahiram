import { useState } from "react";
import { getRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls";
import { getBorrowResourceEndpoint } from "../../API/Endpoints/borrowRequestEndpoints";

const useGetSpecificBorrowRequest = () => {
  const [specificRequest, setSpecificRequest] = useState({});
  const [isErrorSpecificRequest, setErrorSpecificRequest] = useState(null);
  const [isSpecificRequestLoading, setSpecificRequestLoading] = useState(false);

  const fetchSpecificRequest = async (transacId) => {
    try {
      setSpecificRequestLoading(true);
      const endpoint = getBorrowResourceEndpoint(transacId);
      const response = await getRequest(endpoint);

      if (response?.status === false) {
        setErrorSpecificRequest(response?.message);
      }

      setSpecificRequest(response.data);
      setSpecificRequestLoading(false);
    } catch (error) {
      setErrorSpecificRequest(error);
      console.error("Error fetching details:", error);
    }
  };

  return {
    specificRequest,
    isSpecificRequestLoading,
    isErrorSpecificRequest,
    fetchSpecificRequest,
    setErrorSpecificRequest,
  };
};

export default useGetSpecificBorrowRequest;
