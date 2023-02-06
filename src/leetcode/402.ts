function removeKdigits(num: string, k: number): string {
  const res: string[] = [];
  const stack = [];

  for (let i = 0; i < num.length; i++) {
    while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k -= 1;
    }

    stack.push(num[i]);
  }

  return stack.join("");
}
