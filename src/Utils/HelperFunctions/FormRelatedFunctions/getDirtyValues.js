export const getDirtyValues = (retrievedFormValues, dirtyFields) => {
  let dirtyValues = {};
  if (dirtyFields) {
    // Get the keys of the retrievedFormValues object
    const dirtyFieldKeys = Object.keys(dirtyFields);

    // Create an object with only the dirty keys
    dirtyValues = dirtyFieldKeys.reduce((acc, key) => {
      acc[key] = retrievedFormValues[key];
      return acc;
    }, {});
  }
  return dirtyValues;
};
