import { useState } from "react";
import { getRequest } from "../API/HttpRequests/borrowRequestAxiosCalls";
// import { getRequest } from "../../API/HttpRequests/borrowRequestAxiosCalls";

const useGet = () => {
  const [list, setList] = useState([]);
  const [isGetListError, setIsGetListError] = useState(null);
  const [isGetListLoading, setIsGetListLoading] = useState(false);

  const getRequestList = async (endpoint) => {
    try {
      setIsGetListLoading(true);
      const response = await getRequest(endpoint);

      if (response?.status === false) {
        setIsGetListError(response?.message);
      } else {
        setList(response?.data);
      }

      setIsGetListLoading(false);
    } catch (error) {
      setIsGetListError(error);
      console.error("Error fetching borrow requests:", error);
      setIsGetListLoading(false);
    }
  };

  return {
    list,
    isGetListLoading,
    isGetListError,
    setIsGetListError,
    getRequestList,
  };
};

export default useGet;
