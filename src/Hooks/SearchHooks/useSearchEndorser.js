import { useEffect, useState } from "react";
import { searchUserByName } from "../../API/Endpoints/searchEndpoints";
import { getApcisRequest } from "../../API/HttpRequests/apcisAxiosCalls";

const useSearchEndorser = (endorser, isOfficeSelected) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchEndorser = async (name) => {
    try {
      setLoading(true);
      const endpoint = searchUserByName(name);
      const response = await getApcisRequest(endpoint);

      if (response?.status === false) {
        setError(response?.message);
      }
      setResults(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error searching endorser:", error);
      setError(error);
    }
  };

  useEffect(() => {
    const delay = 100;
    // Set a timeout to execute the API request after the specified delay
    const timeoutId = setTimeout(() => {
      if (endorser && isOfficeSelected) {
        searchEndorser(endorser);
      }
    }, delay);

    // Cleanup function to clear the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, [endorser, isOfficeSelected]);

  return { results, loading, error, setError };
};

export default useSearchEndorser;
