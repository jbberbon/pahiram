import { useState } from "react";
import { getRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls";
import { getItemGroupBookedDates } from "../../API/Endpoints/borrowRequestEndpoints";

const useGetItemGroupBookedDates = () => {
  const [bookedDates, setBookedDates] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRequestList = async (resourceId) => {
    try {
      setIsLoading(true);
      const endpoint = getItemGroupBookedDates(resourceId);
      const response = await getRequest(endpoint);

      if (response?.status === false) {
        setBookedDates(response?.message);
      }
      setBookedDates(response?.data);

      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      console.error("Error fetching borrow requests:", error);
      setIsLoading(false);
    }
  };

//   useEffect(() => {
//     getRequestList();
//   }, []);

  return {
    bookedDates,
    isLoading,
    isError,
    setIsError,
    getRequestList,
  };
};

export default useGetItemGroupBookedDates;
