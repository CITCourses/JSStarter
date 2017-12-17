'use strict';

const genArr = () => 
  [...new Array(Math.round(Math.random() * 50))]
    .map((el) => Math.round(Math.random() * 50));

console.log(genArr());
