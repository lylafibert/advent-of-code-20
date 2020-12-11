export default (adapters: number[]): number => {
  let one = 0;
  let three = 1;
  const sortedAdapters = adapters.sort((a, b) => a - b);
  sortedAdapters.forEach((adapter, i) => {
    if (i === 0) {
      if (adapter === 1) {
        one++;
      } else if (adapter === 3) three++;
    } else {
      const difference = adapter - sortedAdapters[i - 1];
      if (difference === 1) {
        one++;
      } else if (difference === 3) three++;
    }
  });
  return one * three;
};
