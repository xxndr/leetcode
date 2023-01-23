function firstIndex(arr, target, start = 0, end = arr.length - 1) {
  const middleIndex = start + Math.floor((end - start) / 2);
  if (arr[middleIndex] === target) {
    let curr = middleIndex;
    while (arr[curr] === target && curr >= 0) {
      if (curr === 0) {
        return 0;
      }
      curr--;
    }
    return curr === -1 ? curr : curr + 1;
  }

  if (arr[middleIndex] > target) {
    return firstIndex(arr, target, start, middleIndex - 1);
  }

  if (arr[middleIndex] < target) {
    return firstIndex(arr, target, middleIndex + 1, end);
  }

  return -1;
}
