import { useEffect, useState } from "react";
import SearchEndorserAPI from "../APIEndpoints/BorrowItemsAPI/SearchEndorserAPi";


const useSearchEndorser = (endorser, isOfficeSelected) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchEndorser = async (name) => {
    try {
      setLoading(true);
      const data = await SearchEndorserAPI(name); // Use the SearchEndorser function

      setResults(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error searching endorser:", error);
      setError("Failed to search endorser. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = 500;
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
