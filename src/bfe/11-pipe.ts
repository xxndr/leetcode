type Func = (arg: any) => any;

function pipe(funcs: Array<Func>): Func {
  return (arg: any) => funcs.reduce((acc, curr) => curr(acc), arg);
}
