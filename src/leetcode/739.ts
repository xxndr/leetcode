function dailyTemperatures(temperatures: number[]): number[] {
  let stack: number[] = [];
  let res = Array.from<number>({ length: temperatures.length }).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const elIndex = stack.pop();
      if (elIndex !== undefined) {
        const diff = i - elIndex;
        res[elIndex] = diff;
      }
    }

    stack.push(i);
  }

  return res;
}
