import { useState } from "react";
import { getRequest } from "../API/HttpRequests/borrowRequestAxiosCalls";
// import { getTransactionEndpoint } from "../API/Endpoints/manageBorrowTransaction";

const useGetSpecificResource = () => {
  const [specificResource, setSpecificResource] = useState({});
  const [isErrorSpecificResource, setIsErrorSpecificResource] = useState(null);
  const [isLoadingSpecificResource, setIsLoadingSpecificResource] =
    useState(false);

  const fetchSpecificResource = async (endpoint, transacId) => {
    try {
      setIsLoadingSpecificResource(true);

      const specificResourceEndpoint = endpoint(transacId);
      //   const endpoint = getTransactionEndpoint(specificResourceEndpoint);
      const response = await getRequest(specificResourceEndpoint);

      if (response?.status === false) {
        isErrorSpecificResource(response?.message);
      } else {
        setSpecificResource(response.data);
      }
      setIsLoadingSpecificResource(false);
    } catch (error) {
      setIsLoadingSpecificResource(false);
      setIsErrorSpecificResource(error);
      console.error("Error fetching details:", error);
    }
  };

  return {
    specificResource,
    isLoadingSpecificResource,
    isErrorSpecificResource,
    setIsErrorSpecificResource,
    fetchSpecificResource,
  };
};

export default useGetSpecificResource;
