// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join(''); // Reverse the string
//     if (str === reversed) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// isPalindrome("racecar"); // true



// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         console.log(1);
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         console.log(result);
//     }
// }

// factorial(5); // 120

function fibonacci(n) {
    let arr = [0, 1];
    for (let i=0; i<=n; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    console.log(arr);
}

// fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function flattenArray(arr) {
//     // Your code here
// }