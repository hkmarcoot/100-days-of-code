export function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }
  if (exponent > 1) {
    return base * power(base, exponent - 1);
  }
}
//if exponent is 4
//return base * base * base * base

// if (exponent === 0) {
//   return 1
// }

// if (exponent === 1) {
//   return base
// }

// let result = base
// while (exponent > 1) {
//   result = result * base
//   exponent = exponent - 1
// }
// return result
