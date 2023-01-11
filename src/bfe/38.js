function spyOn(obj, methodName) {
  const spyObject = {
    calls: [],
  };

  const proxyHandler = {
    apply(target, thisArg, argsList) {
      spyObject.calls.push(argsList);
      Reflect.apply(target, thisArg, argsList);
    },
  };
  obj[methodName] = new Proxy(obj[methodName], proxyHandler);

  return spyObject;
}
