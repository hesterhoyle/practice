// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// //=> is calling the functions

// let coffeeIsGrinding = false

// const PressGrindBeans = () => {
//     if (coffeeIsGrinding == true) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// PressGrindBeans();
// PressGrindBeans();
// PressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing £${amount} from account ${accnum}`);
// }
// cashWithdrawal(300, 5049921);
// cashWithdrawal(30, 5049921);

// const drinkOrder = (size, type) => {
//     console.log(`You have ordered a ${size} ${type}`);
// }

// drinkOrder('small', 'latte');
// drinkOrder('large', 'americano');
// drinkOrder('medium', 'cappuchino');

// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal(300, accnumber);
// cashWithdrawal(20, 1234566)

// let surname = 'Jones'
// let name = 'Sarah'

// const fullName = (firstName, secName) => {
//     console.log(`Hello, my name is ${firstName} ${secName}`);
// };

// fullName(name, surname);
// fullName('Annie', 'Smith')
// fullName('Barry', surname)

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addUp(7,3));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFarenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
// console.log('The temperature is ' + getFarenheit(15) + '°F')

// console.log('------------------------')

// const minus32 = (farenheit) => {
//     return farenheit - 32;
// };
// const getCelsius = (farenheit) => {
//     return minus32(farenheit) * (5/9);
// };
// console.log('The temperature is ' + getCelsius(59) + '°C');

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
//     console.log('Order number: ' + orderCount);
// }
// takeOrder('pineapple');
// takeOrder('cheese');
// takeOrder('pepperoni');

// let accBalance = 500

// const cashWithdraw = (amount, accNum) => {
//     if (amount <= accBalance) {
//         console.log(`${amount} withdrawn from account ${accNum}`)
//     } else if (amount > accBalance) {
//         console.log(`ERROR, Not enough in account ${accNum}`)
//     }
// }

// cashWithdraw(500, 426488)


let orderCount = 0;

const takeOrder = (filling1, filling2, filling3, filling4, filling5) => {
    orderCount++;
    console.log(`Order number: ${orderCount}`)
    console.log(`Preparing your sandwich order: ${filling1}, ${filling2}, ${filling3}, ${filling4}, ${filling5}`);
}

takeOrder ('ham', 'cheese', 'pickle', 'lettuce', 'tomato')
takeOrder ('bacon', 'lettuce', 'tomato', 'cheese', 'mayo')