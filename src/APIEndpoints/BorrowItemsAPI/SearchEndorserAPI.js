import ApcisAxiosConfig from "../ApcisAxiosConfig";

const SearchEndorserAPI = async (name) => {
  const bearerToken = "5|CcW29NQdih3SUokRffPz9aDHrDO3zW11puv2qMzTdefc2be5";

  try {
    const response = await ApcisAxiosConfig.get(`/users/search/${name}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching endorser:", error);
    return null;
  }
};

export default SearchEndorserAPI;
