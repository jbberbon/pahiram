import { useState } from "react";
import { postRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls";
import { postBorrowRequestEndpoint } from "../../API/Endpoints/borrowRequestEndpoints";

const useSubmitRequest = () => {
  const [isSubmitError, setSubmitError] = useState(null);
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [isSubmitSuccess, setSubmitSuccess] = useState(null);

  const handleSubmitRequest = async (requestBody) => {
    const endpoint = postBorrowRequestEndpoint;
    try {
      setSubmitLoading(true);
      const response = await postRequest(endpoint, requestBody);

      if (response?.status === false) {
        setSubmitError(response.message);
        setSubmitLoading(false);
        return;
      }
      console.log("HOY " + response?.message);
      setSubmitSuccess(response?.message);
      console.log("HOYY2 " + isSubmitSuccess);
      setSubmitLoading(false);
    } catch (error) {
      console.error(error);
      setSubmitError("An error occurred while processing the request.");
      setSubmitLoading(false);
    }
  };

  return {
    isSubmitSuccess,
    isSubmitError,
    isSubmitLoading,
    setSubmitError,
    setSubmitSuccess,
    handleSubmitRequest,
  };
};

export default useSubmitRequest;
