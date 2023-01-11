type Curry = (fn: (...args: any[]) => any) => (...args: any[]) => any;

const curry: Curry = (fn) => {
  const arity = fn.length;
  let argsAcc: any[] = [];
  const curriedFn = (...args: any[]) => {
    if (argsAcc.length >= arity - args.length) {
      return fn(...argsAcc, ...args);
    }
    argsAcc.push(...args);

    return curriedFn;
  };

  return curriedFn;
};
