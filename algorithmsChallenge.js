var prompt = require("prompt");

prompt.start();

// //Fibonacci
// prompt.get(["n"], function(err, result) {
//   n = result.n;
//   console.log(fibonacci(n));

//   function fibonacci(n) {
//     var firstNum = 1;
//     var secondNum = 1;
//     var sum = 0;
//     if (n === 2) {
//       console.log(1);
//       console.log(1);
//     } else if (n === 1) {
//       console.log(1);
//     } else {
//       console.log(1);
//       console.log(1);
//       for (var i = 3; i <= n; i++) {
//         sum = firstNum + secondNum;
//         firstNum = secondNum;
//         secondNum = sum;
//         console.log(sum);
//       }
//     }
//   }
// });

// //Prime Factorization
// prompt.get(["n"], function(err, result) {
//   n = result.n;
//   console.log(prime(n));

//   function prime(n) {
//     let list = [];
//     for (var i = 2; i < n; i++) {
//       if (n % i === 0) {
//         for (var v = 2; v < i; v++) {
//           if (i % v === 0) {
//             if (!list.includes(v)) {
//               list.push(v);
//               console.log(list);
//             }
//           }
//         }
//       }
//     }
//   }

//Next Prime Number
prompt.get(["response"], function(err, result) {
  response = result.response;
  console.log(nextPrime(response));

  function nextPrime(response) {
    var counter = 0;
    var numOfTimesAsked = 0;

    while (response === "y") {
      numOfTimesAsked++;
      let list = [];
      for (var p = 0; p < Number.MAX_SAFE_INTEGER; i++) {
        for (var i = 2; i < n; i++) {
          if (n % i === 0) {
            for (var v = 2; v < i; v++) {
              if (i % v === 0) {
                if (!list.includes(v)) {
                  list.push(v);
                  console.log(list);
                }
              }
            }
          }
        }
      }
    }
  }
});

// function fibonacci(n) {
//   if (n === 0) {
//     console.log(1);
//     return 1;
//   } else if (n === 1) {
//     console.log(1);
//     return 1;
//   } else {
//     let answer = fibonacci(n - 1) + fibonacci(n - 2);
//     console.log(answer);
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
