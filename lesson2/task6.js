'use strict';

// 1
for (let i = 1001; i > 0; i-=2) {
  console.log(i);
}

// 2
let i = 1001;
while (i > 0) {
  console.log(i);
  i -= 2;
}

// 3
let i = 1001;
do {
  console.log(i);
  i -= 2;
} while (i > 0);
