import { useEffect, useState } from "react";
import { getModelListByOfficeEndpoint } from "../../API/Endpoints/searchEndpoints.js";
import { getRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls.js";

const useSearchItemModel = (officeCode, isOfficeSelected) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchItemModel = async (officeCode) => {
    try {
      console.error("search executed")
      setLoading(true);
      const endpoint = getModelListByOfficeEndpoint(officeCode);
      const response = await getRequest(endpoint);

      if (response?.status === false) {
        setError(response?.message);
      }
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    const delay = 0;
    // Set a timeout to execute the API request after the specified delay
    const timeoutId = setTimeout(() => {
      if (officeCode && isOfficeSelected) {
        searchItemModel(officeCode);
      }
    }, delay);

    // Cleanup function to clear the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, [officeCode, isOfficeSelected]);

  return { results, loading, error, setError };
};

export default useSearchItemModel;
