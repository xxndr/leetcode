const finsCountOfSubarraysWithSumLessThanGoal = (nums, goal) => {
  let right = 0;
  let left = 0;
  let sum = 0;
  let counter = 0;

  while (right <= nums.length - 1) {
    sum += nums[right];
    while (sum > goal && left <= right) {
      sum -= nums[left];
      left += 1;
    }
    if (sum <= goal) {
      counter += right - left + 1;
    }
    right += 1;
  }
  return counter;
};

var numSubarraysWithSum = function (nums, goal) {
  return (
    finsCountOfSubarraysWithSumLessThanGoal(nums, goal) -
    finsCountOfSubarraysWithSumLessThanGoal(nums, goal - 1)
  );
};
