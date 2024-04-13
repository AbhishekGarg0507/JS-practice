"use strict";  // treat all js code as newer version

// alert("hello")  => we are using nodejs thats why the syntax is different

// code readibility must be high

// string => " "
let name = "abhishek"

// number => 2 to power 53
// bigint
let age = 23

// boolean => true/false
let isLoggedIn = false;

// null => stand alone value in js , it is a representation of expty value
// undefined => when the value is not defined
// symbol => unique value


// object
// console.log(typeof undefined);  // output => undeined
// console.log(typeof null); // output => object


//  conversion operations
let score = "abhishek"

// console.log(typeof score);
// console.log( typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => gives NaN after converting
// "true" => gives 1

isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); 

// 1 => true
//  0 => false
// "" => false
// "abhi " => true
// " " => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);
