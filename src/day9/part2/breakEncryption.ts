export default (cypher: number[], invalidNumber: number): number => {
  let firstNumber: number = cypher[0];
  let indexOfFirstNumber = 0;
  let range: number[] = [cypher[0]];
  let lastNumber: number;
  let sum: number = 0;
  let i = 0;
  while (sum !== invalidNumber) {
    if (sum > invalidNumber) {
      sum = 0;
      i = indexOfFirstNumber + 1;
      indexOfFirstNumber++;
      firstNumber = cypher[i];
      range = [];
    }
    sum += cypher[i];
    range.push(cypher[i]);

    if (sum === invalidNumber) {
      lastNumber = cypher[i];
    }
    i++;
  }
  const sortedRange = range.sort();
  return sortedRange[0] + sortedRange[sortedRange.length - 1];
};
