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


