'use strict';

const sum = (...args) =>
  args.reduce((sum, current) => sum += current, 0);

console.log(sum(1, 2, 3, 4, 5, 6));
