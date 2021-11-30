// 평균 구하기
let array = [10, 20, 30, 40, 50];

let result = 0;
for (let value of array) {
  result += value;
}
console.log(result / array.length);

// 0 ~ 100 까지 짝수만 더하세요

let i = 0;
let result = 0;
while (i < 101) {
  result += i;
  i += 2;
}
console.log(result);

let num = 0;

do {
  console.log(num);
  num += 1;
} while (num < 11);

//구구단 for문
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i * j} <br>`);
  }
}

// 구구단 while

let i = 2;
let j = 1;

while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
  j = 1;
}

// 5단에서 멈추기
let i = 2;
let j = 1;
while (i < 10) {
  if (i == 5) {
    break;
  }
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
  j = 1;
}

// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
outer: for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i === 5) break outer;
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
