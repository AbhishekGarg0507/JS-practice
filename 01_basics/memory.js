// two types of memory in js
// stack, heap

// Stack(Premitive)
//   -> if something stored in stack memory we got the copy of the variable and changes made in that copy.

let myName = 'Abhishek';
let fullName = myName;
fullName = 'Abhishek garg'

console.log(myName);
console.log(fullName);



// Heap(Non-premitive)
//  -> Heap gives us the refrence of the variable stored in the memory and the changes made in the original itself.

let userOne = {
    name:'User1',
    age:12
}

let usertwo = userOne;

usertwo.name = 'User2';

console.log(userOne);
console.log(usertwo);