//7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)


let x=+prompt('please enter the value x');
let y=+prompt('please enter the value y');
let r=+prompt('please enter the value r');

console.log('x='+x)
console.log('y='+y)
console.log('r='+r)

const R=x**2+y**2
console.log('R='+R)

if(r**2==R){
    console.log('on the circle')
}else if(r**2<R){
    console.log('inside')
}else{
    console.log('outside')
}