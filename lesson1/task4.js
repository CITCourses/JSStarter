'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number = ', (a) => {
  a = parseInt(a);

  rl.question('Enter the second number = ', (b) => {
    b = parseInt(b);

    rl.question('Choose operation \"+\", \"-\", \"*\", \"/\": ', (operation) => {
      switch (operation) {
        case '+':
          console.log(a + b);
          break;
        case '-':
          console.log(a - b);
          break;
        case '*':
          console.log(a * b);
          break;
        case '/':
          console.log(a / b);
          break;
        default:
          console.log('Operation is not exist!');
          break;
      }

      rl.close();
    });
  });
});
