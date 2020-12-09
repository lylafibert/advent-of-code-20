import validateNextNumber from "./validateNextNumber";
export default (cypher: number[], previousNumbersRange: number): number => {
  let isValid = true;
  let firstInvalidNumber: number;

  for (let i = previousNumbersRange; isValid; i++) {
    const previousNumbers = cypher.slice(i - previousNumbersRange, i);
    isValid = validateNextNumber(previousNumbers, cypher[i]);
    if (!isValid) firstInvalidNumber = cypher[i];
  }
  return firstInvalidNumber;
};
