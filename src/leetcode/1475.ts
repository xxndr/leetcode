function finalPrices(prices: number[]): number[] {
  const monotonicStack: number[] = [];
  const result = [...prices];

  for (let i = 0; i < prices.length; i++) {
    while (
      monotonicStack.length &&
      prices[i] <= prices[monotonicStack[monotonicStack.length - 1]]
    ) {
      const elementIndex = monotonicStack.pop() as number;

      const el = prices[elementIndex];
      const newPrice = el - prices[i];
      result[elementIndex] = newPrice;
    }

    monotonicStack.push(i);
  }

  return result;
}
