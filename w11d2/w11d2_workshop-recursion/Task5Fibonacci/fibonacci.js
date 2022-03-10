export function fibonacci(num){
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return 1;
  }
  if (num > 1) {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// let a = 1
// let b = 0
// let temp
// while (num >= 0){
//   temp = a;
//   a = a + b;
//   b = temp;
//   num--;
// }
// return b;