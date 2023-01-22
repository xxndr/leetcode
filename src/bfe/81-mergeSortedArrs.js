function merge2Arrays(arr1, arr2) {
  let firstPointer = 0;
  let secondPointer = 0;
  let res = [];
  while (firstPointer < arr1.length && secondPointer < arr2.length) {
    if (arr1[firstPointer] > arr2[secondPointer]) {
      res.push(arr2[secondPointer]);
      secondPointer += 1;
    } else {
      res.push(arr1[firstPointer]);
      firstPointer += 1;
    }
  }

  for (let i = firstPointer; i < arr1.length; i++) {
    res.push(arr1[i]);
  }

  for (let i = secondPointer; i < arr2.length; i++) {
    res.push(arr2[i]);
  }
  return res;
}

function merge(arrList) {
  if (arrList.length === 0) {
    return [];
  }

  if (arrList.length === 1) {
    return arrList[0];
  }

  if (arrList.length === 2) {
    return merge2Arrays(arrList[0], arrList[1]);
  }

  const middleIndex = Math.floor(arrList.length / 2);
  const firstHalf = arrList.slice(0, middleIndex);
  const secondHalf = arrList.slice(middleIndex);

  const leftList = merge(firstHalf);
  const rightList = merge(secondHalf);

  return merge2Arrays(leftList, rightList);
}
