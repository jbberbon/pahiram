import PahiramAxiosConfig from "../PahiramAxiosConfig";

const SearchItemAPI = async (officeCode) => {
  const bearerToken = "14|QneSwrYepnQ0gGoJzmhE6t4pOZqf0SntmAYnHRBxd899e8e2";

  try {
    const response = await PahiramAxiosConfig.get(`/office/${officeCode}/item-model-list`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching item:", error);
    return null;
  }
};

export default SearchItemAPI;
