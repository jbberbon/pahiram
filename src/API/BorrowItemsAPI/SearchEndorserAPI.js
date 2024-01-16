import ApcisAxiosConfig from "../ApcisAxiosConfig";

const bearerToken = "37|yNkQIaLDWyJzqfZsRqmCTMckoQCgc4vTM9L5wpnh4468a503";
const SearchEndorserAPI = async (name) => {
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
