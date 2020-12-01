const reportRepare = (entries: number[]): number => {
  let result: number;
  entries.forEach((number1, index) => {
    const remainingNumbers1 = entries.slice(index + 1);
    remainingNumbers1.forEach((number2, index) => {
      const remainingNumbers2 = remainingNumbers1.slice(index + 1);
      remainingNumbers2.forEach((number3) => {
        if (number1 + number2 + number3 === 2020)
          result = number1 * number2 * number3;
      });
    });
  });
  return result;
};

export default reportRepare;
