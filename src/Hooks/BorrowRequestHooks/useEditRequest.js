import { useState } from "react";
import { patchRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls";
import { patchBorrowRequestEndpoint } from "../../API/Endpoints/borrowRequestEndpoints";



const useEditRequest = () => {
  const [isEditSuccess, setEditSuccess] = useState(null);
  const [isEditError, setEditError] = useState(null);
  const [isEditLoading, setEditLoading] = useState(false);

  const handleEditRequest = async (transacId, requestBody) => {
    const endpoint = patchBorrowRequestEndpoint(transacId);
    try {
      setEditLoading(true);
      const response = await patchRequest(endpoint, requestBody);

      // If status === true
      if (response?.status === false) {
        setEditError(response.message);
        setEditLoading(false);
        return;
      }
      setEditSuccess(response?.message);
      setEditLoading(false);
      // Successful
    } catch (error) {
      console.error(error);
      setEditError("An error occurred while processing the request.");
      setEditLoading(false);
    }
  };

  return {
    isEditSuccess,
    isEditError,
    isEditLoading,
    setEditError,
    setEditSuccess,
    handleEditRequest,
  };
};

export default useEditRequest;
