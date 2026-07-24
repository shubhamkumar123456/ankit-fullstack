//Array methods --> 
//1) length
//2) push
//3) pop 
//4) unshift 
//5) shift 
//6) join --> important
//8) slice --> important
//9) splice --> important


// a)slice example --> can cut a portion from an array -->
// let arr = [10, 'john', 'apple','mango', true];
// let ans = arr.slice(0,3)  //
// console.log(ans)

// B) splice example -->  can add or remove any element in array at any place. works in original array

// let arr = [10, 'john', 'apple','mango', true];
// first add element at any place-->
// arr.splce(index, no of element you want to delete, add element name)
// arr.splice(2,0, 'cena')
// console.log(arr)

// remove element at any place -->
// arr.splice(3,1);
// arr.splice(0,1);
// console.log(arr)

// mix case add and remove both at any place --> replace
// arr.splice(2,1,'kiwi');
// console.log(arr)



// Array methods --> forEach , map method , filter method -->

// forEach -->  traverse through an array -->

// let arr = [ 10, 20, 30, 40, 50]

// arr.forEach((val, i)=>{
//     console.log(val , i)
// })

//// map --> 
// a) traverse or iterate through an array -->
// b) can return a new array or modified array

// let ans = arr.map((val, i)=>{  // [11, 21]
//     // console.log(val , i)
//     return val+1
// })
// console.log(ans)


// 
// remove element at 3rd index

// let arr = [ 10, 20, 30, 40, 50]

// arr.splice(3, 1);
// console.log(arr)





