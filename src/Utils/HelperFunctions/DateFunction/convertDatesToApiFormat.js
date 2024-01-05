function convertDatesToApiFormat(obj) {
  for (const key in obj) {
    if (
      typeof obj[key] === "string" &&
      obj[key].match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)
    ) {
      obj[key] = obj[key].replace("T", " ").concat(":00");
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      convertDatesToApiFormat(obj[key]);
    }
  }
  return obj;
}

export default convertDatesToApiFormat;
