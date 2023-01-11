const uncompress = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== ")") {
      stack.push(char);
    } else {
      let currArr = [];
      let lastStackEl = stack.pop();

      while (lastStackEl !== "(") {
        currArr.push(lastStackEl);
        lastStackEl = stack.pop();
      }

      let howManyTimesShouldRepeatString = "";
      while (stack[stack.length - 1] >= "0" && stack[stack.length - 1] <= "9") {
        howManyTimesShouldRepeatString += stack.pop();
      }

      howManyTimesShouldRepeatString = Number(
        [...howManyTimesShouldRepeatString].reverse().join("")
      );
      const repeatedStringArray = currArr
        .reverse()
        .join("")
        .repeat(howManyTimesShouldRepeatString)
        .split();
      stack.push(...repeatedStringArray);
    }
  }
  return stack.join("");
};
