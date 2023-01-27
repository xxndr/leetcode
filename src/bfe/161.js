function myExpect(input) {
  function internalToBe(number, reversed = false) {
    const areNumbersTheSame = Object.is(number, input);

    const shouldThrow = reversed ? areNumbersTheSame : !areNumbersTheSame;

    if (shouldThrow) {
      throw new Error("Values are not the same");
    }

    return true;
  }

  return {
    toBe: internalToBe,
    not: {
      toBe: (number) => internalToBe(number, true),
    },
  };
}
