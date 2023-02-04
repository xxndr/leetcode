const ALPHABET = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// abc
// counter = 4 // 3 % 3 = 0 => aa 4 => ab 5 => ac =>
// 6 => bc
// 7 => cc

function getUniqueClassName() {
  const { counter, currentIndex, data } = getUniqueClassName.metadata;
  const length = data.length;
  const char = ALPHABET[counter];
  data[currentIndex] = char;

  if (counter === ALPHABET.length && currentIndex !== 0) {
    getUniqueClassName.metadata = {
      ...getUniqueClassName.metadata,
      counter: 0,
      currentIndex: getUniqueClassName.metadata.currentIndex - 1,
    };
  }

  if (counter === ALPHABET.length && currentIndex === 0) {
    const newLength = length + 1;
    getUniqueClassName.metadata = {
      data: [].fill("a", 0, newLength),
      counter: 0,
      currentIndex: newLength - 1,
    };
  }

  return data.join("");
}

getUniqueClassName.metadata = {
  data: ["a"],
  counter: 0,
  currentIndex: 0,
};

getUniqueClassName.reset = function () {
  // your code here
  getUniqueClassName.metadata = {
    data: ["a"],
    counter: 0,
    currentIndex: 0,
  };
};

getUniqueClassName();
