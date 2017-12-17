'use strict';

// 1
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

// 2
let i = 0;
while (i < 1000) {
  console.log(i++);
}

// 3
let i = 0;
do {
  console.log(i++);
} while (i < 1000);
