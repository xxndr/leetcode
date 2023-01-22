function countOne(num) {
  // your code here
  let counter = 0;
  let mod = num % 2;
  let divided = Math.floor(num / 2);

  while (num) {
    if (mod) {
      counter += 1;
    }
    num = divided;
    mod = num % 2;
    divided = Math.floor(num / 2);
  }
}

console.log(countOne(8));
