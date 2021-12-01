// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language;
const n = 12345.6789;
n.toLocaleString("ko-KR");

// 콤마 찍기 3
let n = 12345678;
n += "";
reverse = "";
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = "";
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2) {
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ",";
    count = 0;
  }
}
console.log(sample);

let 전교점수 = [
  // 1반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
  // 2반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ]

  let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    k += 10;
    console.log(k)
}
viewk()
changek()
viewk()

let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    let k = 20;
    console.log(k)
}
viewk()
changek()
viewk()

function add(a = 100, b = 200) {
  return a + b;
}

add(10, 20);
30
add(10);
210
add();
300
add(b=300)
500 