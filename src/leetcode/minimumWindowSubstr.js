var minWindow = function (s, t) {
  let start = 0;
  let end = 0;
  let result = "";
  const alphabet = new Set([...t]);
  const charFrequencyMap = new Map();
  while (end <= s.length - 1) {
    const char = s[end];

    if (alphabet.has(char)) {
      charFrequencyMap.set(char, (charFrequencyMap.get(char) ?? 0) + 1);
    }

    if (charFrequencyMap.size === alphabet.length) {
      const newSize = end - start + 1; // check +-1
      if (newSize <= result.length) {
        result = s.slice(start, end + 1); // check +-1
      }
    }

    if (charFrequencyMap.size < alphabet.length) {
      end += 1;
    } else {
      start += 1;

      for (
        start;
        start <= end && charFrequencyMap.size === alphabet.length;
        start++
      ) {
        const isCharFromAlphabet = charFrequencyMap.has(s[start]);

        if (charFrequencyMap.size === alphabet.length) {
          const newSize = end - start + 1; // check +-1
          if (newSize <= result.length) {
            result = s.slice(start, end + 1); // check +-1
          }
        }
        if (isCharFromAlphabet) {
          const newCharFrequencyValue = charFrequencyMap.get(s[start]) - 1;
          charFrequencyMap.set(newCharFrequencyValue);

          if (newCharFrequencyValue === 0) {
            charFrequencyMap.delete(s[start]);
          }
        }
      }
    }
  }
};

console.log(minWindow("a", "a"));
