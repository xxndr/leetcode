function firstBadVersion(isBad) {
  return (version) => {
    let start = 0;
    let end = version;
    let middle = start + Math.floor((end - start) / 2);

    while (start <= end) {
      if (isBad(middle) && !isBad(middle - 1)) {
        return middle;
      } else if (!isBad(middle)) {
        start = middle + 1;
      } else if (isBad(middle)) {
        end = middle - 1;
      }

      middle = start + Math.floor((end - start) / 2);
    }
    return -1;
  };
}
