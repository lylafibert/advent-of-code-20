const reportRepare = (entries: number[]): number => {
  let result: number;
  for (let i = 0; i < entries.length && !result; i++) {
    const remainingEntries = entries.slice(i + 1);
    const entry = entries[i];
    remainingEntries.forEach((remainingEntry) => {
      if (entry + remainingEntry === 2020) result = entry * remainingEntry;
    });
  }
  return result;
};

export default reportRepare;
