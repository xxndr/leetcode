function largestDiff(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return Math.abs(min - max);
}
