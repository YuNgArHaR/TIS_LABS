"use strict";

// 1 task
for (let i = 10; i <= 1000; i++) {
  let str = String(i);
  let firstDigit = str[0];
  console.log(firstDigit);
}

// 2 task
for (let i = 10; i <= 1000; i++) {
  let str = String(i);
  let firstDigit = parseInt(str[0]);
  let secondDigit = parseInt(str[1]);
  let sum = firstDigit + secondDigit;
  console.log(sum);
}


// 3 task