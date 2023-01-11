function findSingle(arr: number[]): number {
  const setOfSingleNumbers = new Set<number>();

  arr.forEach((elem) => {
    if (!setOfSingleNumbers.has(elem)) {
      setOfSingleNumbers.add(elem);
    } else {
      setOfSingleNumbers.delete(elem);
    }
  });

  return [...setOfSingleNumbers.values()][0];
}
