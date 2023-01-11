function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  let middleIndex = Math.floor(start + (end - start) / 2);

  if (start > end) {
    return -1;
  }
  let middleEl = arr[middleIndex];

  if (middleEl === target) {
    return middleIndex;
  }

  if (middleEl < target) {
    return binarySearch(arr, target, middleIndex + 1, end);
  }

  if (middleEl > target) {
    return binarySearch(arr, target, start, middleIndex - 1);
  }
}
