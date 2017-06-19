var prompt = require("prompt");

prompt.start();

//Fibonacci
prompt.get(["n"], function(err, result) {
  n = result.n;
  console.log(fibonacci(n));

  function fibonacci(n) {
    var firstNum = 1;
    var secondNum = 1;
    var sum = 0;
    if (n === 2) {
      console.log(1);
      console.log(1);
    } else if (n === 1) {
      console.log(1);
    } else {
      console.log(1);
      console.log(1);
      for (var i = 3; i <= n; i++) {
        sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
        console.log(sum);
      }
    }
  }
});

//Prime Factorization
prompt.get(["n"], function(err, result) {
  n = result.n;
  console.log(prime(n));

  function prime(n) {
    if (n === 0) {
      console.log(0);
      //   return 0;
    } else if (n === 1) {
      console.log(1);
      //   return 1
    } else if (n === 2) {
      console.log(2);
    } else {
      let answer = prime(n / 2);
      console.log(answer);
      return prime(n / 2);
    }
  }
});

// function fibonacci(n) {
//     if (n === 0) {
//       console.log(1);
//       return 1;
//     } else if (n === 1) {
//       console.log(1);
//       return 1;
//     } else {
//       let answer = fibonacci(n - 1) + fibonacci(n - 2);
//       console.log(answer);
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   }
