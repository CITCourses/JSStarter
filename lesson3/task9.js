'use strict';

const strToObj = (str) => 
  str.split(';')
    .map((str) => str.split('='))
    .reduce((obj, current) => { 
      obj[current[0]] = current[1]; 
      return obj; 
    }, {});

console.log(strToObj('name=value;name1=value1'));
