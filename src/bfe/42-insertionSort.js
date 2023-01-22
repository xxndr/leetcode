function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j >= i; j--) {
      const insertElement = arr[i];
      const currentElement = arr[j];

      if (insertElement < currentElement) {
        [arr[insertElement], arr[currentElement]] = [
          arr[insertElement],
          arr[currentElement],
        ];
      }
    }
  }
}
