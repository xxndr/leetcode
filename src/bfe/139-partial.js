function partial(func, ...args) {
  return function (...innerArgs) {
    let innerArgsPointer = 0;
    const finalArgs = args.map((arg) =>
      arg === partial.placeholder ? innerArgs[innerArgsPointer++] : arg
    );
    return func.apply(this, [
      ...finalArgs,
      ...innerArgs.slice(innerArgsPointer),
    ]);
  };
}

partial.placeholder = Symbol("placeholder");
