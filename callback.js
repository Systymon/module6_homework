function sumNum(a) {
  return function (b) {
    return a + b
  }
}
let result = sumNum(2)
console.log(result(2))
