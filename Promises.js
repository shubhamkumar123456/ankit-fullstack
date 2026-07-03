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

function One(a, b, c) {
  setTimeout(() => {
    console.log("dukan pr jaana tha");
    a(b, c);
  }, 4000);
}

function two(b, c) {
  setTimeout(() => {
    console.log("coldrink khareedi");
    b(c);
  }, 2000);
}

function Three(c) {
  setTimeout(() => {
    console.log("ghar waps aa gye ");
    c();
  }, 3000);
}

function Four() {
  setTimeout(function(){
    console.log("coldrink pee li")
  }, 1000);
}

One(two, Three, Four); //two , Three, Four --> arguments


