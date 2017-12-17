'use strict';

const reverse = (str) => str.split('').reverse().join('');

const reverseAll = (...args) => 
  args.map((str) => reverse(str));

console.log(reverseAll('Hello World', 'NodeJS is cooo!'));
