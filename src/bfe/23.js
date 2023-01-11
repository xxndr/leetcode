function sum(num) {
  innerSum[Symbol.toPrimitive] = function () {
    return num;
  };

  function innerSum(num1) {
    return sum(num + num1);
  }

  return innerSum;
}
