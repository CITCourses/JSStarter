'use strict';

// 1
for (let i = 1000; i > 0; i--) {
  console.log(i);
}

// 2
let i = 1000;
while (i > 0) {
  console.log(i--);
}

// 3
let i = 1000;
do {
  console.log(i--);
} while (i > 0);
