'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number = ', (a) => {
  console.log(typeof a);

  rl.question('Enter the second number = ', (b) => {
    console.log(typeof b);

    rl.close();
  });
});
