function undefinedToNull(arg) {
  if (arg === undefined) {
    return null;
  }

  if (Array.isArray(arg)) {
    return arg.map((el) => undefinedToNull(el));
  }

  if (typeof arg === "object" && arg !== null) {
    return Object.entries(arg).reduce((acc, [key, value]) => {
      acc[key] = undefinedToNull(value);
      return acc;
    }, {});
  }

  return arg;
}
