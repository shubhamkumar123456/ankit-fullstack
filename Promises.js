// Synchronous --> line by line
// Asynchronous --> simulteniously (side by side)

// console.log("one")
// console.log("two")
// console.log("three")

// console.log("one");

// setTimeout(()=>{
//     console.log("two")
// }, 3000)

// setTimeout(()=>{
//     console.log("three")
// },1000)

// console.log("four")

//  task -->
// 1) dukan pr jaana tha  --> 4s
// 2) coldrink khareedi  --> 2s
// 3) ghar waps aa gye  --> 3s
// 4) coldrink pee li  -->  1s

// function One(a, b, c) {
//   setTimeout(() => {
//     console.log("dukan pr jaana tha");
//     a(b, c);
//   }, 4000);
// }

// function two(b, c) {
//   setTimeout(() => {
//     console.log("coldrink khareedi");
//     b(c);
//   }, 2000);
// }

// function Three(c) {
//   setTimeout(() => {
//     console.log("ghar waps aa gye ");
//     c();
//   }, 3000);
// }

// function Four() {
//   setTimeout(function(){
//     console.log("coldrink pee li")
//   }, 1000);
// }

// One(two, Three, Four); //two , Three, Four --> arguments



// Promises --> are used to handle asynchronous operations. it take a callback function with two arguments resolve or reject. it has three states pending fullfilled and rejected. if promise is fulfilled you can get your output in .then part if promise is rejected you can get your answer in .catch part

// find the sum of array if array elementa is more than 3 using promisews
// let arr = [10, 12, 15, 9]
// let x = new Promise((res, rej) => {
//     let length = arr.length;  //4
//     if(length > 3){
//         let sum = 0;
//         for(let val of arr){
//             sum = sum + val;
//         }

//         res("promise is solved : array sum = ", sum)
//     }
//     else{
//       rej('promise is rejected: array length is less than 3')
//     }

// })




