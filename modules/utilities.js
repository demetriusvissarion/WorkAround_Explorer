const formatNumber = (number) => {
  //Validate Input
  if (isNaN(number)) throw "Parameter to format is not a valid number";

  //Manipulate number as array
  const numArray = number.toString().split("");

  //Check if number has decimals and get index after last whole number
  let decimalPointIndex = numArray.findIndex((char) => char === ".");
  let endOfWholeNumberIndex =
    decimalPointIndex > 0 ? decimalPointIndex : numArray.length;

  //Add Commas every three whole number digits from right to left
  for (let i = endOfWholeNumberIndex - 3; i > 0; i -= 3) 
    numArray.splice(i, 0, ",");

  return numArray.join("");
};

export {formatNumber};