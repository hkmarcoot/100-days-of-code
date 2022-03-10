export function sumEven(n) {
  if(n ===0){
    return 0
  }
  else if(n % 2 !== 0){
return sumEven(n-1)
  } else if(n%2 ===0){
  return n + sumEven(n-1)
}}
// let result = 0
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       result = result + i
//     }
//   }
//   return result