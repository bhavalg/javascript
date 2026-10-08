// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let mynewDate = new Date(2023, 0, 23)
// console.log(mynewDate.toDateString())

let mycreateddate = new Date("01-14-2023")
// console.log(mycreateddate.toLocaleString())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})