import { useState } from "react";
import { loginRequest } from "../../API/HttpRequests/authAxiosCalls";

const useLogin = () => {
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [isLoginSuccess, setLoginSuccess] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoginError, setLoginError] = useState(null);

  const handleLogin = async (requestBody) => {
    try {
      setLoginLoading(true);
      const response = await loginRequest(requestBody);
      if (response?.status === false) {
        setLoginError(response.message);
        setLoginLoading(false);
        return;
      }
      setUserData(response?.data);
      setLoginLoading(false);
      setLoginSuccess(response?.message);
    } catch (error) {
      console.error(error);
      setLoginError(error);
      setLoginLoading(false);
    }
  };

  return {
    handleLogin,
    userData,
    isLoginLoading,
    isLoginSuccess,
    isLoginError,
    setLoginSuccess,
    setLoginError,
  };
};

export default useLogin;
