const formatCharFrequency = (currentLetter) => {
  return `${currentLetter.char}${
    currentLetter.count > 1 ? currentLetter.count : ""
  }`;
};

function compress(inputStr) {
  let str = "";
  let currentLetter = {
    char: "",
    count: 0,
  };

  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];

    if (!currentLetter.char) {
      currentLetter = {
        char,
        count: 0,
      };
    }

    if (currentLetter.char === char) {
      currentLetter.count += 1;
    } else {
      str += formatCharFrequency(currentLetter);
      currentLetter.char = char;
      currentLetter.count = 1;
    }
  }
  str += formatCharFrequency(currentLetter);

  return str;
}
