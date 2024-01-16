import { useEffect, useState } from "react";
import SearchItemAPI from "../API/BorrowItemsAPI/SearchItemAPI";

const useSearchItemModel = (officeCode, isOfficeSelected) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchItemModel = async (officeCode) => {
    try {
      setLoading(true);
      const response = await SearchItemAPI(officeCode); // Use the SearchEndorser function

      // Check if server is down
      if (typeof response === "undefined" || response === null) {
        setError("Failed to retrieve item list. Please try again later.");
        return;
      }

      // Check if has data and status is true
      if (response?.data && response?.status) {
        setResults(response.data);
      } else {
        // Retrieve error message from api
        setError(response?.data?.message || "An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error searching endorser:", error);
      setError("Failed to retrieve items. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = 100;
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
