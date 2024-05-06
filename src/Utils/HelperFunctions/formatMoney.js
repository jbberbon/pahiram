export const formatMoney = (number) => {
  // Check if the input is a valid number
  if (isNaN(number)) {
    return "Invalid input";
  }

  // Convert the number to a string
  let numberString = number.toString();

  // Check if the number has decimals
  if (numberString.includes(".")) {
    // Split the number into integer and decimal parts
    let [integerPart, decimalPart] = numberString.split(".");

    // Add commas to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Concatenate the formatted integer part with the decimal part
    numberString = integerPart + "." + decimalPart;
  } else {
    // Add commas to the whole number if there are no decimals
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return "₱" + numberString;
};
