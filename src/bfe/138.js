function intersect(arr1, arr2) {
  let firstPointer = 0;
  let secondPointer = 0;
  let intersection = [];

  while (firstPointer < arr1.length && secondPointer < arr2.length) {
    if (arr1[firstPointer] > arr2[secondPointer]) {
      secondPointer += 1;
    }

    if (arr1[firstPointer] < arr2[secondPointer]) {
      firstPointer += 1;
    }

    if (arr1[firstPointer] === arr2[secondPointer]) {
      intersection.push(arr1[firstPointer]);
      firstPointer += 1;
      secondPointer += 1;
    }
  }

  return intersection;
}
