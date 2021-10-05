function num(a, b) {
  let i = a
  let num = setInterval(function () {
    console.log(i)
    if (i === b) {
      clearInterval(num)
    }
    i++
  }, 1000)
}
num(5, 15)
