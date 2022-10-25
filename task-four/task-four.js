//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.

let a=+prompt('please enter the value a');
let b=+prompt('please enter the value b');

    console.log(a);
    console.log(b);

if(a>b){
    console.log(a+b);
}else{
    if(a<b){
        console.log(a-b);
    }else{
        console.log(a*b);
    }
}