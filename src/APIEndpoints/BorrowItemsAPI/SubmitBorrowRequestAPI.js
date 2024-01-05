import PahiramAxiosConfig from "../PahiramAxiosConfig";

const SubmitBorrowRequestAPI = async (requestBody) => {
  const pahiramToken = "14|QneSwrYepnQ0gGoJzmhE6t4pOZqf0SntmAYnHRBxd899e8e2";
  const apcisToken = "5|CcW29NQdih3SUokRffPz9aDHrDO3zW11puv2qMzTdefc2be5";

  try {
    const response = await PahiramAxiosConfig.post(
      `/user/borrow-request/submit`,
      { ...requestBody, apcis_token: apcisToken },
      {
        headers: {
          Authorization: `Bearer ${pahiramToken}`,
        },
      }
    );
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error submitting request:", error.response.data);
    return error.response.data;
  }
};

export default SubmitBorrowRequestAPI;
