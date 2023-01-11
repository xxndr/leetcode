function getIntersection(arr1: any[], arr2: any[]): any[] {
  const uniqueArr1Elements = new Set(arr1);
  return [...new Set(arr2)].filter((elem) => uniqueArr1Elements.has(elem));
}
