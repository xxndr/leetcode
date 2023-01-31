function chunk(items, size) {
  let i = 0;
  if (size < 1) {
    return [];
  }

  let res = [];
  let chunkIndex = 0;
  while (i < items.length) {
    let chunk = [];
    for (let j = 0; j <= size - 1 && i < items.length; j++) {
      chunk.push(items[chunkIndex * size + j]);
      i++;
    }

    chunkIndex += 1;
    res.push(chunk);
  }
  return res;
}
