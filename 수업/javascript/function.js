"5, 4, 10, 2, 5";

let input = "5, 4, 10, 2, 5".split(",");
let result = 0;
console.log(input);

for (let i = 0; i < input.length; i++) {
  result += parseInt(input[i]);
  console.log(result);
}

console.log(result / input.length);

//[11, 22, 33, 111, 2] 각자리수의 합을 구하세요
