function primeNumber(a) {
  if (a >= 1000) {
    console.log('Данные неверны')
  } else if (a % 2 === 0 && a != 2) {
    console.log('Число ' + a + ' составное')
  } else {
    console.log('Число ' + a + ' простое')
  }
  return a
}
primeNumber(1000)
