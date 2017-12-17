'use strict';

const min = (...args) => 
  args.reduce((min, current) => min > current ? min = current : min, args[0]);

console.log(min(3, 4, 0, 1, 3));
