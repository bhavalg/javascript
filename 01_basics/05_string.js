const name = "bhaval"
const repoCount = 50

// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and I have ${repoCount} repositories on GitHub`)

const gamename = new String ('bhavalg')
console.log(gamename[4])
console.log(gamename.length)
console.log(gamename.toUpperCase())

// Whenever we apply command such as .length / .toUpperCase, the original value stays stored
// and uska copy version is made and uspe saare changes are done

console.log(gamename.charAt('2'))

// charAt() me index beechme daalna hota hai bracket me to find the corresponding string letter

console.log(gamename.indexOf('g'))

// indexOf() me letter daalna hota hai bracked me to find the corresponding index of that letter

const newString = gamename.substring(0,4)
console.log(newString)

// substring prints the number of strings in the given index range NEGATIVE NOT ALLOWED!!

const anotherstring = gamename.slice(-3,7)
console.log(anotherstring)

// slice prints the number of strings in the given index range but NEGATIVE IS ALLOWED!!

const newstringwow = "    hitesh    "
console.log(newstringwow)
console.log(newstringwow.trim())

// trim removes whitespace from both ends of a string and returns a new string without modifying the original 



