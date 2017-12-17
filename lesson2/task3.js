'use strict';

// 1
for (let i = 1; i < 1000; i+=2) {
  console.log(i);
}

// 2
let i = 1;
while (i < 1000) {
  console.log(i);
  i += 2;
}

// 3
let i = 1;
do {
  console.log(i);
  i += 2;
} while (i < 1000);
