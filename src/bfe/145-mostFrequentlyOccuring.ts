function count(str: string): string | string[] {
  const charFrequencyMap = new Map<string, number>();
  let maxFrequency = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    const charFrequency = (charFrequencyMap.get(char) ?? 0) + 1;
    maxFrequency = Math.max(maxFrequency, charFrequency);
    charFrequencyMap.set(char, charFrequency);
  }

  const maxFrequencyValues = [...charFrequencyMap.entries()]
    .filter(([key, value]) => value === maxFrequency)
    .map(([key]) => key);

  return maxFrequencyValues.length === 1
    ? maxFrequencyValues[0]
    : maxFrequencyValues;
}
