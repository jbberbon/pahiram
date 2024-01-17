import ApcisAxiosConfig from "../ApcisAxiosConfig";

const SearchEndorserAPI = async (name) => {
  try {
    const response = await ApcisAxiosConfig.get(`/users/search/${name}`);

    return response.data;
  } catch (error) {
    console.error("Error searching endorser:", error);
    return null;
  }
};

export default SearchEndorserAPI;
