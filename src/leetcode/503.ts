function nextGreaterElements(nums: number[]): number[] {
  const stack = [];
  const result = Array.from<number>({ length: nums.length }).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const elIndex = stack.pop() as number;
      result[elIndex] = nums[i];
    }
    stack.push(i);
  }

  // 5 4 3 1
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const elIndex = stack.pop() as number;
      result[elIndex] = nums[i];
    }
  }

  return result;
}
