function moveZeros(list: Array<any>): void {
  let numberInsertionPointer = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== 0) {
      [list[i], list[numberInsertionPointer]] = [
        list[numberInsertionPointer],
        list[i],
      ];
      numberInsertionPointer += 1;
    }
  }
}
