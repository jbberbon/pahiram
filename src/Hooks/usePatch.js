import { useState } from "react";
import { patchRequest } from "../API/HttpRequests/borrowRequestAxiosCalls";

const usePatch = () => {
  const [isPatchSuccess, setIsPatchSuccess] = useState(null);
  const [isPatchError, setIsPatchError] = useState(null);
  const [isPatchLoading, setIsPatchLoading] = useState(false);

  const handlePatch = async (endpoint, transacId, requestBody) => {
    try {
      //   setIsPatchLoading(() => {
      //     return true; // Set loading state to true
      //   });
      setIsPatchLoading(true);

      const patchEndpoint = endpoint(transacId);
      const response = await patchRequest(patchEndpoint, requestBody);

      // If status === true
      if (response?.status === false) {
        setIsPatchError(response.message);
        setIsPatchLoading(false);
        return;
      } else {
        setIsPatchSuccess(response?.message);
      }
      setIsPatchLoading(false);
      // Successful
    } catch (error) {
      console.error(error);
      setIsPatchError("An error occurred while processing the request.");
      setIsPatchLoading(false);
    }
  };

  return {
    isPatchSuccess,
    isPatchError,
    isPatchLoading,
    setIsPatchError,
    setIsPatchSuccess,
    handlePatch,
  };
};

export default usePatch;
