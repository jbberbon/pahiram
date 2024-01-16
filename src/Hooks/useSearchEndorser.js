import { useEffect, useState } from "react";
// import SearchItemAPI from "../APIEndpoints/BorrowItemsAPI/SearchItemAPI";
import SearchEndorserAPI from "../API/BorrowItemsAPI/SearchEndorserAPI";

const useSearchEndorser = (endorser, isOfficeSelected) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchEndorser = async (name) => {
    try {
      setLoading(true);
      const response = await SearchEndorserAPI(name); // Use the SearchItemAPI function

      // Check if server is down
      if (typeof response === "undefined" || response === null) {
        setError("Unable to search for users. Please try again later.");
        return;
      }

      // Check if has data and status is true
      if (response?.data && response?.status) {
        setResults(response.data);
        setError(null); // Clear any previous error
      } else {
        // Retrieve error message from API
        setError(response?.data?.message || "An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error searching endorser:", error);
      setError("Failed to search endorser. Please try again later.");
    } finally {
      setLoading(false);
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
