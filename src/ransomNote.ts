function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    const charInMap = map.get(char);

    if (!charInMap) {
      return false;
    }

    map.set(char, charInMap - 1);

    if (charInMap - 1 < 0) {
      return false;
    }
  }

  return true;
}
