function validate(str) {
  const openCloseBracketsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const openedBrackets = Object.keys(openCloseBracketsMap);
  const closeOpenBracketsMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openedBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (closeOpenBracketsMap[str[i]] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
