import { PahiramAxiosConfig } from "../PahiramAxiosConfig";

const SearchItemAPI = async (officeCode) => {
  try {
    const response = await PahiramAxiosConfig.get(
      `/office/${officeCode}/item-model-list`
    );

    return response.data;
  } catch (error) {
    console.error("Error searching item:", error);
    return null;
  }
};

export default SearchItemAPI;
