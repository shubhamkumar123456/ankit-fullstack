//  function -->

// a) normal function -->
// syntax -->

// function functionName(){  // function decleration
//     //logic
// }
// functionName() // function calling

// function xyz(a, b, c, d) {  // a, b, c,d are parameters
//   console.log("hello");
//   console.log(b);
//   console.log(b[1]);
//   console.log(c.age)
// }

// xyz(10, [9, 6, 4], { name: "one", age: 23 }, true, "hello");
// data passed in function calling is known as arguments

// b) arrow functions -->

// let x = 10;
// let y = "hello";
// let z = true;
// let a = undefined;
// let b = [10, 9];
// let c = { name: "one", age: 45 };

//example -->   function expression --> when a function is used as a variable then function is known as function expression

//  let d = function(){
//     console.log("hiii")
//  }

//  d()

// example --> arrow function, introduced in ES6
// let e = ()=>{
//     console.log("hiiii")
// }
// e()

//Callback function -->

// function xyz(){
//     console.log("all good")
// }

// function abc(a, b, c){
//     console.log("not good");
//     console.log(a)
//     console.log(b)
//     c()

// }

// abc(10 , "hello", xyz)
// functions that are passed into another functions as an argument are known as callback function . cyx is callback function

// functions that take anothetr functions as an argument are known as Higher order functions. abc is HOF

// let and const are block scopped but var is not
// let x = 10;

// if (x == 10) {
//   let a = 5;
//   var b = 6;
//   const z = 7;
// }

// console.log(a)
// console.log(b);
// console.log(z)

// let ,  var and const all are functional scopped. (can not be access outside the function)
// function xyz() {
//   let x = 20;
//   var y= 10;
//   const a = 1
//   console.log("hii");
//   //   return;
//   //   console.log("hello");
//   //   var y = 5;
//   //   const z = 3;
//   return [x,y, a];
// }

// let ans = xyz(); //20 , [20, 10, 1]
// console.log(ans);
// console.log(ans[2]);

//  return --> can stop the function can can also return  a value to function calling

// xyz();

// console.log(x);
// console.log(y);
// console.log(z);



// function xyz(){
//     console.log("hii") //  hii
//      return 10
// }

// xyz() // 10

// function xyz(){
//     console.log("hii")   //hi
//      return function(){
//         console.log("good")
//      }
// }

//  let ans =   xyz()  // function(){console.log("good")}
//  ans()


//  functions that are passed into another function or functions that are returned by some other function are known as callback function


       



// Timer functions --> setTimeOut, setInterval

// setInterval(function, time)
// setTimeout(function, time)

// function xyz(){
//     console.log("hello")
// }

// setInterval(xyz, 3000)  
// xyz --> cb function
// setInterval --> HOF


// setInterval(()=>{
//     console.log("hello")
// }, 1000)


// function xyz(){
//     console.log("named function")
// }


// anonymous function
// let a = function(){
//     console.log("hii")
// }

// let b = ()=>{
//     console.log("noo")
// }

// xyz()
// a()
// b()


