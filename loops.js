// // for loop to run numbers 0-9 and display on screen, in increments of +1
// for (i = 0 ; i < 10 ; i++ ){
//     console.log(i);
// }

// // array of chocolate bars
// let favoriteChoco = [
//     "Mars",
//     "Snickers",
//     "Twix",
//     "Dairy Milk"
// ];

// //Lists the chocolates in order (index++)
// for (chocoIndex = 0; chocoIndex < favoriteChoco.length; chocoIndex++) {
//     console.log(favoriteChoco[chocoIndex])
// }

//for loops, statement statement, do stuff


// // Array of the movies, with 2 more pushed in at the end
// let favMovies = [
//     "Mega Shark vs Giant Octopus",
//     "Shark Exorcist",
//     "Tremors",
//     "Sharknado",
// ]
// favMovies.push("Mega Shark vs Crocosaurus", "Abraham Lincoln Vampire Hunter")

// // Lists the full array plus the pushed in movies
// for (movIndex = 0; movIndex < favMovies.length; movIndex++) {
//     console.log(favMovies[movIndex])
// }

// // Array with card types, and current card set to blank
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = " ";

// // loop will go until Spade is randomly selected
// while(currentCard != "Spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random() * 4)];
// }
// console.log(currentCard);

// // Array with movies list
// let favMovies = [
//     "Mega Shark vs Giant Octopus",
//     "Shark Exorcist",
//     "Ghostbusters",
//     "Tremors",
//     "Sharknado",
//     "Mega Shark vs Crocosaurus",
//     "Abraham Lincoln Vampire Hunter"
// ]
// // Movies are listed in order
// for (movIndex = 0; movIndex < favMovies.length; movIndex++) {
//     console.log(favMovies[movIndex])
// }
// // Function to check if 3rd movie is Ghostbusters or not, to display text
// if (favMovies[2] == "Ghostbusters") {
//     console.log("Yay its Ghostbusters!")
// } else {
//     console.log("Booo, we want Ghostbusters")
// }

// // starting with 0, will log random numbers until value of 50 is generated
let currentNum = "0"
while(currentNum != 50) {
    console.log(currentNum);
    currentNum = (Math.round(Math.random() * 50))
}
console.log(currentNum)

