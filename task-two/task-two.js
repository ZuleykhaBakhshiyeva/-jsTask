//2.The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).

let a=+prompt('please enter the value a');
let b=+prompt('please enter the value b');

console.log('a='+a);
console.log('b='+b);

const c=a;
console.log('a='+(a=b));
console.log('b='+(b=c));