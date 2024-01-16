import OFFICES from "../../Constants/OFFICES";

function findOfficeByCode(code) {
  for (const office in OFFICES) {
    if (OFFICES[office] === code) {
      return office;
    }
  }
  return "Office not found";
}

export default findOfficeByCode;
