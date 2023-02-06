function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const indexesMap = new Map<number, number>();
  const decreasingStack: number[] = [];
  const res = Array.from<number>({ length: nums1.length }).fill(-1);

  nums1.forEach((num, i) => {
    indexesMap.set(num, i);
  });

  nums2.forEach((el) => {
    while (
      decreasingStack.length &&
      decreasingStack[decreasingStack.length - 1] < el
    ) {
      const elIndex = indexesMap.get(decreasingStack.pop() as number) as number;
      res[elIndex] = el;
    }

    if (indexesMap.has(el)) {
      decreasingStack.push(el as number);
    }
  });

  return res;
}
