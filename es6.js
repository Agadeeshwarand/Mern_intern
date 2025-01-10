//ES6=>ECMA Script standard 6
//1.variable declarations->refer variables.js
//2.scope
//var-global scope
//let=local/block scope
//const=global scope
var a=10
const con=3.14
console.log(a)
console.log(con)
{
    var a=20
    let b=30
    console.log(a)
    console.log(con)
}
console.log(a)
console .log(con)
console .log(b)//ReferenceError: b is not defined
// 3. class and objects
class classeg{
    constructor(){
       this.a=10
    }
    //4.arrow function
    fun=()=>{
        console.log(this.a)
        return 
    }
   
}
obj= new classeg()
console.log(obj.a)
console.log(obj.fun())
//5.ternary operator
a=10
console.log((a%2==0)?"EVEN":"ODD");
//6.spread operator[...]
a=[10,20,30,40]
b=[50,60,70]
c=[...b,...a]
console.log(c)
//7.rest operator
function restop(a,b,...arg){
    console.log(a)
    console.log(b)
    console.log(arg)
}

restop(10,20,30,40,50,...b)
//8.Destructing operator
var array=[10,20,30]
 var [a,b,c,d]=array
 console.log(a,b,c,d);
 //9.hoisting
 console.log(a);
 var a=10;
console.log(b)
let b=10
console.log(c)
const c=10
//2. function hoisting 
console.log(fun1())
function fun1(){
    return 10
}