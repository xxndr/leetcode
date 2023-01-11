function integerToRoman(num: number): string {
  const ROMAN = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  const ARABIC = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  let res = [];
  for (let i = ARABIC.length - 1; i >= 0; i--) {
    const value = ARABIC[i];
    let valueCount = Math.floor(num / value);
    while (valueCount > 0) {
      res.push(ROMAN[i]);
      valueCount -= 1;
    }
    num -= Math.floor(num / value) * value;
  }

  return res.join("");
}
