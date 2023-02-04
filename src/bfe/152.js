const bucketSort = (arr, size) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );

  arr.forEach((elem) => {
    buckets[Math.floor((elem - min) / size)].push(elem);
  });

  return buckets.reduce((acc, curr) => {
    const sortedBucket = curr.sort((a, b) => a - b);
    acc.push(...sortedBucket);
    return acc;
  }, []);
};

const topK = (arr, k) => {
  const sortedArr = bucketSort(arr);
  return sortedArr.slice(0, k);
};
