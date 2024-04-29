"use strict";  // treat all js code as newer version 

// alert("hello")  => we are using nodejs thats why the syntax is different

// ===============================Datatypes======================================
// memory is define at the runtime 
// js interprater first check the type of the data , when we declare the variables and asign data 


// code readibility must be high

// string => " "
// let name = "abhishek"

// number => 2 to power 53
/*
    let number = 10
    let age = 23
    number = 10.25
    number = infinity
    number = NaN
    these all are type number 
*/ 

// bigint
// if we want to store the integer greater then the capacity of the number then we use bigint
// this will work only for integer
// bigint was introduced in 2020
// 1. let number = BigInt(number)  output-> will have a 'n' in the end
// 2. let number = 111111111111111111111111111111111111n  -> by definig n in the end the interprator will understand that the number is in the form of bigint.

// boolean => true/false
// let isLoggedIn = false;


// null => stand alone value in js , it is a representation of expty value
// console.log(typeof null); // output => object
// 

// according to GEC (global execution context) , while defining the variable with var by defalut every variable has a value of undefined.

// undefined => when the value is not defined
// console.log(typeof undefined);  // output => undeined

// symbol => unique value


// object


//  conversion operations
// let score = "abhishek"

// console.log(typeof score);
// console.log( typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => gives NaN after converting
// "true" => gives 1

// isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); 

// 1 => true
//  0 => false
// "" => false
// "abhi " => true
// " " => true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ======================= OPERATIONS ======================================

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = " abhishek"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2 );
// console.log(1 + 2 + "2" );

// console.log(((3 + 4) * 5) % 3);

// console.log(+true);
// console.log(+"");

// let num1 , num2 , num3
// num1 = num2 = num3 = 2+2;

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);



// interview prespective 

// basically 2 types of data types premitive and non premitive or refrence type
// premitive -> 7 -> call by value

// String, Number, Boolean, null, undefined, Symbol , BigInt 

// Symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 48646854165341653n  -> bigint

// js is dynamically typed language.

// Refrenve type (non-premitive)
// Array , Objects, Functions


// const heros = ['shaktiman' , 'batman' , 'doga', 'superman']

// let myObj = {
//     name:'abhishek',
//     age:24,
// };

// const myFun = function(){
//     console.log('hello world');
// }

// console.log(typeof heros);