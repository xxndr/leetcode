var minimumDifference = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  const sortedArr = nums.sort((a, b) => b - a);
  let left = 0;
  let right = 0;
  let diff = 0;
  let minDiff = Infinity;

  while (left <= right && right <= nums.length - k) {
    diff = sortedArr[left] - sortedArr[right + k - 1];
    minDiff = Math.min(minDiff, diff);
    right += 1;
    left += 1;
  }
  return minDiff;
};
