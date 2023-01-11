/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power) {
  if (power === 0 || power === 1) {
    return base;
  }

  const counter = power % 2 !== 0 ? 1 : 0;

  return pow(base, power / 2 + counter) * pow(base, power / 2);
}
