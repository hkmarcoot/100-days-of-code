export function sumAll(n) {

  if(n === 0){
    return 0
  }
  
  return n + sumAll(n-1)
  
}
// let result = 0
//   for (let i = 0; i <= n; i++) {
//     result = result + i
//   }
//   return result