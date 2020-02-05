// let drink = "soda"

// console.log("Would you like a " + drink +"?")

// if (drink == "coffee") {
//     console.log("Ah, delicious")
// } else if (drink == "tea") {
//     console.log("It will do")
// } else if (drink == "hot chocolate") {
//     console.log("Just a small one")
// } else if (drink == "water") {
//     console.log("Got to keep hydrated!")
// } else {
//     console.log("No thanks")
// }

// let age = 18
// let country = "UK"

// if (age => 18 && country == "UK") {
//     console.log("You're in the UK, I can serve you")
// } else if (age => 21 && country == "US") {
//     console.log("You're in the US, I can serve you")
// } else {
//     console.log("You aren't old enough")
// }

// let location = "Cambridge"
// let weather = "sunny"

// if (location == "Cambridge" && weather == "cold") {
//     console.log("Cambridge is freezing!")
// } else if (location == "Cambridge" && weather == "windy") {
//     console.log("Cambridge is windy today")
// } else {
//     console.log("Check the forecast")
// }

// let day = "Saturday"

// if (day == "Saturday" || day == "Sunday") {
//     console.log("It is the weekend")
// } else {
//     console.log("When is the weekend?")
// }

// let pet = "cow"

// if (pet == "cat" || pet == "dog" || pet == "rabbit") {
//     console.log("That's a good pet")
// } else if (pet == "fish" || pet == "bird") {
//     console.log("That's a nice easy pet")
// } else {
//     console.log("That's a difficult pet!")
// }

// let password = "12345678"

// if (password.length >= 8) {
//     console.log("This password is acceptable")
// } else {
//     console.log("This password is too short. It requires at least 8 characters")
// }

// let num = 19

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("This number is divisible by 3 or 5")
// } else {
//     console.log("This number is not divisible by 3 or 5")
// }

// let numb = 15

// if (numb % 3 == 0 && numb % 5 == 0) {
//     console.log("fizz buzz")
// } else if (numb % 3 == 0) {
//     console.log("fizz")
// } else if (numb % 5 == 0) {
//     console.log("buzz")
// } else {
//     console.log(numb)
// }

// let space1 = "x"
// let space2 = "o"
// let space3 = " "
// let space4 = "x"
// let space5 = "x"
// let space6 = " "
// let space7 = "o"
// let space8 = " "
// let space9 = " "

// console.log("   |   |   ")
// console.log(` ${space1} | ${space2} | ${space3} `)
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log(` ${space4} | ${space5} | ${space6} `)
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log(` ${space7} | ${space8} | ${space9} `)
// console.log("   |   |   ")

// if (space1 == "x" && space2 == "x" && space3 == "x") {
//     console.log("x wins!")
// } else if (space1 == "o" && space2 == "o" && space3 == "o") {
//     console.log("o wins!")
// } else {
//     console.log("no winner")
// }
///////////////////alternatively below
// if (space1 == space2 && space2 == space3) {
//     console.log("Winner!")
// }


let age = 60

// if (age < 18) {
//     console.log('Child ticket price: £8')
// } else if (age > 59) {
//     console.log('Senior ticket price: £7.50')
// } else if (age => 18) {
//     console.log('Adult ticket price: £10.95')
// } 

if (age >= 18 && age <= 60) {
    console.log(`You are ${age}, that will be £10.95`)
} else if (age < 18) {
    console.log(`You are ${age}, that will be £8.00`)
} else {
    console.log(`You are ${age}, that will be £7.50`)
}