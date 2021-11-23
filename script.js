//-------------------------------------
// COMBINE FILTER + MAP
let prices = [2000, 1000, 500, 3000, 10000];

// let array1 = prices.map((price) => price * 10.1);
// let array2 = array1.filter((price) => price < 1500);
// console.log(array1);
// console.log(array2);

let array1 = prices
  .map((price) => price * 10.1)
  .filter((price) => price < 15000);
console.log(array1);

let array2 = prices.filter((price) => price < 1500).map((price) => price * 0.9);
console.log(array2);
//-------------------------------------
// ARROW FUNCTION IN ARRAYS FILTER
// let prices = [2000, 1000, 500, 3000, 10000];

// let filteredPrices = prices.filter((price) => price < 1500);
// console.log(prices);
// console.log(filteredPrices);
// console.log(filteredPrices.length);
//-------------------------------------
// ARROW FUNCTION IN ARRAYS
// MAPPING IN FUNCTION
// old function using loop

// let prices = [2000, 1000, 500, 3000, 10000];
// let dPrices = [];
// for (i = 0; i < prices.length; i++) {
//   dPrices[i] = prices[i] * 0.9;
// }
// console.log(prices);
// console.log(dPrices);

// new arrow function using arrow map

// let prices = [2000, 1000, 500, 3000, 10000];
// let dPrices = prices.map((p) => p * 0.9);
// console.log(dPrices);
// console.log(prices);

//-------------------------------------
//Mapping iwth strings in array

// let names = ["Ali", "Ahmed", "Bilal", "Mohammad Jamil"];
// console.log(name[3].toUpperCase());
// console.log(name[1].toLowerCase());
// console.log(name.toUpperCase());
// let uNames = names.map((n) => n.toUpperCase());
// console.log(uNames);

// let uNaming = name.map((un) => un.toLowerCase());
// console.log(uNaming);

// let uName = names.map((name) => name.length());
// console.log((uName = names.map((name) => name.length)));

//-------------------------------------
// MAPPING WITH BOOLEAN
// MAPPING WITH TERNIRARY OPERATOR

// let status = [true, false, false, true, true, false];
// console.log(status.map((s) => (s ? "Available" : "Not Available")));

// console.log(
//   status.map((s) => {
//     if (s == true) return "available";
//     else return "unavailable";
//   })
// );
//-------------------------------------
// don't forget to initialize array with empty square brackets

// let array = [];
// console.log(array.length);

//-------------------------------------
// mixed array of data structures

// let array = [
//   10,
//   "Ejaz Ahmed",
//   30.09,
//   true,
//   { id: 1, name: "mobile" },
//   [12, 45],
// ];
// console.log(array[3]);
// console.log(typeof array[3]);
// array[3] = "Bilal Shafqat";
// console.log(array[3]);
// console.log(typeof array[3]);

//-------------------------------------
// FINDING METHOD
// to find the index of array element
// if it doesnt exist then it will return -1

// let array = [10, 20, 30, 40, 50];
// let index = array.indexOf(40);
// if (index == -1) console.log("index not found");
// else console.log("found at " + index);

//-------------------------------------
// DELETE METHOD
// to delete the specific number
// it will make it undefined

// let array = [10, 20, 30, 40, 50];
// delete array[2];
// console.log(array);

//-------------------------------------
// SHIFT METHOD
// to delete element in the begining of array
// from the left hand side
// this will delete value at the end of array
// delete value in the last index of array

// let array = [10, 20, 30, 40, 50];
// array.shift();
// array.shift();
// array.shift();
// console.log(array);

//-------------------------------------
// UNSHIFT METHOD
// to add element in the begining of array
// from the left hand side
// this will delete value at the end of array
// delete value in the last index of array

// let array = [10, 20, 30, 40, 50];
// array.unshift(90);
// array.unshift(100);
// array.unshift(110);
// console.log(array);

//-------------------------------------
// POP METHOD
// to delete value we use pop
// this will delete value at the end of array
// delete value in the last index of array

// let array = [10, 20, 30, 40, 50];
// array.push(90);
// array.push(100);
// array.push(110);
// console.log(array);
// array.pop();
// console.log(array);

//-------------------------------------

//-------------------------------------
// PUSH METHOD
// to add value we use PUSH
// this will add value at the end of array
// added value in the last index of array

// let array = [10, 20, 30, 40, 50];
// array.push(90);
// array.push(100);
// array.push(110);
// console.log(array);

//-------------------------------------

// PUSH METHOD in the last
// to add value we use PUSH
// this will add value at the end of array
// added value in the last index of array

// let array = [10, 20, 30, 40, 50];
// array.push(90);

// to add value in the end of array
// the last index of array

// array[array.length - 1] = 100;
// console.log(array);

//-------------------------------------

// let array = [10, 20, 30, 40, 50];
// array[5] = 10;
// console.log(array);

// let array = [10, 20, 30, 40, 50];
// console.log(array.length);
// console.log(array[1]);
