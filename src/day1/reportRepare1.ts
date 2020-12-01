const reportRepare = (entries: number[]): number => {
  let result: number;
  entries.forEach((entry, index) => {
    const remainingEntries = entries.slice(index + 1);
    remainingEntries.forEach((remainingEntry) => {
      if (entry + remainingEntry === 2020) result = entry * remainingEntry;
    });
  });
  return result;
};

export default reportRepare;
