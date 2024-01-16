import { useState } from "react";
import { cancelRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls";
import { cancelBorrowRequestEndpoint } from "../../API/Endpoints/borrowRequestEndpoints";

const useCancelRequest = () => {
  const [isCancelSuccess, setCancelSuccess] = useState(null);
  const [isCancelError, setCancelError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleCancelRequest = async (transacId) => {
    try {
      setLoading(true);
      const endpoint = cancelBorrowRequestEndpoint(transacId);
      const response = await cancelRequest(endpoint);
      console.log(response);

      if (response?.status === false) {
        setCancelError(response?.message);
      }

      setCancelSuccess(response?.message);
      setLoading(false);
    } catch (error) {
      setCancelError(error?.message || "An unexpected error occurred");
      setLoading(false);
    }
  };

  return {
    isLoading,
    isCancelSuccess,
    isCancelError,
    setCancelSuccess,
    setCancelError,
    handleCancelRequest,
  };
};

export default useCancelRequest;
