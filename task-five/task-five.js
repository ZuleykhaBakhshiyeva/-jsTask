
//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.

//ax^2+bx+c=0

let a=+prompt('please enter the value a');
let b=+prompt('please enter the value b');
let c=+prompt('please enter the value c');

console.log(a);
console.log(b);
console.log(c);

if(a==0){
    console.log('x='+(-c/b));
}else{
    const D=b*b-4*a*c;
    console.log('Discriminat='+D)
    if(D==0){
    const x=(-b)/(2*a)
    console.log('x='+x);
    }else{
        if(D>0){
        console.log('x='+(-b + Math.sqrt(D)) / (2 * a));
        console.log('x='+(-b - Math.sqrt(D)) / (2 * a));
        }else{
        console.log('this is wrong')
        }
    }
}