function t(translation, data) {
  let result = "";

  let i = 0;
  while (i < translation.length) {
    const hasFoundOpenedBrackets =
      translation[i] === "{" && translation[i + 1] === "{";
    if (hasFoundOpenedBrackets) {
      i = i + 2;
      let start = i;
      let hasFoundClosedBrackets = false;
      for (i; i < translation.length; i++) {
        if (translation[i] === "}" && translation[i + 1] === "}") {
          let word = translation.slice(start, i);
          hasFoundClosedBrackets = true;
          if (data && data[word]) {
            result += data[word];
          }
          i = i + 1;
          break;
        }
      }
      if (!hasFoundClosedBrackets) {
        result += translation.slice(start - 2);
      }
    } else {
      result += translation[i];
    }
    i++;
  }

  return result;
}
