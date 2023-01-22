function bubbleSort(arr) {
  // your code here
  const n = arr.length;
  for (let index = 0; index < n; index++) {
    for (let subIdx = 0; subIdx < n - index - 1; subIdx++)
      if (arr[subIdx] > arr[subIdx + 1])
        [arr[subIdx], arr[subIdx + 1]] = [arr[subIdx + 1], arr[subIdx]];
  }
}
