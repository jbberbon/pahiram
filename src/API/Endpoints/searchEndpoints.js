export const getModelListByOfficeEndpoint = (office) => {
  return `/office/${office}/item-model-list`;
};

export const searchUserByName = (name) => {
  return `/users/search/${name}`;
};
