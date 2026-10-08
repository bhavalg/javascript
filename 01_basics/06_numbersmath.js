const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString())
// console.log(balance.toString().length)

// converts the balance number into a string so that we can find number of digits in the number

// console.log(balance.toFixed(2));

// decimal value

const othernumber = 24.23732
// console.log(othernumber.toPrecision(3))

// rounds off to number of places for example for above it is 24.2

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// number system ke hisab se commas daalna


// --------------------------------Math-----------------------------------------------

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(3.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2)) 
// console.log(Math.max(4, 2, 8, 1, 9, 5, 7))
// console.log(Math.min(4, 2, 8, 1, 9, 5, 7))

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10+1))

const min = 10
const max = 20

console.log(Math.floor(Math.random())*(max - min + 1) + min)