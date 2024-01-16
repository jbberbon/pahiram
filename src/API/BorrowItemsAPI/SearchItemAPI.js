import { PahiramAxiosConfig } from "../PahiramAxiosConfig";
const bearerToken = "36|bKErnBI2rz0PiVD0Z0WV89aceScY4oFdNMT7T0JO068b5812";
const SearchItemAPI = async (officeCode) => {
  try {
    const response = await PahiramAxiosConfig.get(
      `/office/${officeCode}/item-model-list`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error searching item:", error);
    return null;
  }
};

export default SearchItemAPI;
