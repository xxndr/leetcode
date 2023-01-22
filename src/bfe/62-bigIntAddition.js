function add(num1, num2) {
  let extraDigit = 0;
  let resArr = [];
  const [maxLengthArr, opossiteArr] =
    num1.length > num2.length
      ? [num1, `${"0".repeat(num1.length - num2.length)}${num2}`]
      : [num2, `${"0".repeat(num2.length - num1.length)}${num1}`];

  for (let i = maxLengthArr.length - 1; i >= 0; i--) {
    const sum =
      Number(maxLengthArr[i]) + Number(opossiteArr[i] ?? 0) + extraDigit;
    const digit = sum % 10;
    if (sum >= 10) {
      extraDigit = 1;
    } else {
      extraDigit = 0;
    }
    resArr.push(digit);
  }

  if (extraDigit === 1) {
    resArr.push(1);
  }

  return resArr.reverse().join("");
}
