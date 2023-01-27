function set(obj, path, value) {
  const properties = Array.isArray(path)
    ? path
    : path.replace("[", ".").replace("]", "").split(".");

  properties.reduce((acc, curr, i) => {
    if (i === properties.length - 1) {
      acc[curr] = value;
      return acc;
    }

    if (!acc[curr]) {
      const possibleNextValue = properties[i + 1];
      acc[curr] =
        String(Number(possibleNextValue)) === possibleNextValue ? [] : {};
    }
    return acc[curr];
  }, obj);
}
