// //  1. reverse a String in  a JavaScript

//  function rev(str){
//     return str.split("").reverse().join("");
//  }
// console.log(rev("pankaj")); 

//  // 2. palindrome check

// function rev1(str){
//      return str === str.split("").reverse().join("");
    
// }
// console.log(rev1("madam")); // true

// // 3. factorial of a number

// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }

// }
// console.log(factorial(5))

// // 4. fibonacci series

// function fibonacci(n){
//     let fib = [0,1];
//     for(let i =2;i<n;i++){
//         fib.push(fib[i-1]+fib[i-2]);
//     }
//      return fib
// }
// console.log(fibonacci(10)) 

// 5. find the largest number in an array

// var arr = [3,5,7,2,8,1,15];

// maxium = arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>maxium){
//         maxium = arr[i];
//     }

// }
// console.log(maxium)  // 15


 // 6. find the second largest number in an array

// var arr = [3,5,7,2,8,1,15];
 
// var max1 = arr[0];
// var max2 = arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max1){
//         max2 = max1;
//         max1 = arr[i];

//     }
//     else if(arr[i]>max2 && arr[i]!==max1){
//         max2 = arr[i];

//     }
// }
// console.log(max2)  // 8



