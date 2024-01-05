import { useEffect, useState } from "react";
import SearchItemAPI from "../APIEndpoints/BorrowItemsAPI/SearchItemAPI";

const useSearchItemModel = (officeCode, isOfficeSelected) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchItemModel = async (officeCode) => {
    try {
      setLoading(true);
      const data = await SearchItemAPI(officeCode); // Use the SearchEndorser function

      setResults(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error searching endorser:", error);
      setError("Failed to retrieve items. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = 1000;
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
