function longestUniqueSubstr(str) {
  const charIndexMap = new Map();

  let maxPointers = {
    left: 0,
    right: 0,
  };
  let left = 0;
  let right = 0;

  for (let i = 0; i < str.length; i++) {
    if (!charIndexMap.has(str[i])) {
      charIndexMap.set(str[i], i);
      right = i;
    } else {
      left = charIndexMap.get(str[i]) + 1;
      right = i;
      charIndexMap.set(str[i], i);
    }

    if (right - left + 1 > maxPointers.right - maxPointers.left) {
      maxPointers.left = left;
      maxPointers.right = right;
    }
  }

  return str.slice(maxPointers.left, maxPointers.right + 1);
}
