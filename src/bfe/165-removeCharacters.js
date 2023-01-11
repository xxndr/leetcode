/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const lastElInStack = stack[stack.length - 1];

    if (char === "c" && lastElInStack === "a") {
      stack.pop();
    } else if (char !== "b") {
      stack.push(char);
    }
  }

  return stack.join("");
}
