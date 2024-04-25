// use strict  -> this is used to follow the modern approach like undefined variable may show error in js as well.

var age = 10;
var age = 20;
// issues in var =>
// 1. the compiler consider the second age as it is redeclared now the value od age is 20
// 2. in var we cannot declare constant variable

// js -> features
// 1. run time enviroment language
// 2. synchronas language and also behave like asynchronous
// 3.

// in var -> 
// 1. var has no block scope but has only function scope
// 2. we can redeclare the variable name
// 3. we can redefine the variable value
// 4. we cannot make constant variable

// in let -> 
// 1. let has block scope
// 2. we cannot redeclare the variable
// 3. we cannot make constant variables
// 4. we can redefine the variable

// const -> 
// 1. const has block scope
// 2. we cannot redeclare the variable
// 3. we cannot make redefine variables
// 4. we can make constant variable
// NOTE -> when we declaring variable with const it is mendatory to define the value as well otherwise it will generate error


// variable naming ->
// 1. it should be meaningful
//    like: let a = "abhishek" -> is not meaningful
//    but: let firstName = "abhishek"  -> is meaningful
// 2. fisrt letter should be small of the first word (use camel case) -> firstName
//    first_name -> (snake case)
// 3. for constant :
//    const maxNum = 10; -> we don't write like that to make different make it in uppercase
//    and to seprate among two words we use underscore
//    const MAX_NUMBER = 10;   
// 4. starting letter can be  _, $ and character but cannot be number   .
// 5. space is also consider as caracter and cannot be used.
// 6. reserve keywords like: let,const,var etc. , cannot be used as variable name .
// 7. variable names as case sensitive.


const accountId = 144553
let accountEmail = "abhi@google.com"
var accountPassword = "123456"
accountCity = "Delhi" 
let accountState;

// accountId = 5   => not allowed
accountEmail = "abhishek@gmail.com"
accountPassword = "123"
accountCity = "noida"

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

// preffer not to use var 
// because of issue in block scope and function scope


