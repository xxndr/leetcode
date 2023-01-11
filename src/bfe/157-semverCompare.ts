function compare(v1: string, v2: string): 0 | 1 | -1 {
  const valuesV1 = v1.split(".");
  const valuesV2 = v2.split(".");

  for (let i = 0; i < valuesV1.length; i++) {
    if (Number(valuesV1[i]) > Number(valuesV2[i])) {
      return 1;
    }

    if (Number(valuesV1[i]) < Number(valuesV2[i])) {
      return -1;
    }
  }

  return 0;
}
