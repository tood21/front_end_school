let lottoNum = [];

function randomNum(min = 1, max = 45) {
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);

    for (let j of lottoNum) {
      if (num == j) {
        num = Math.floor(Math.random() * (max - min + 1) + min);
      }
    }
    lottoNum.push(num);
  }
}

randomNum();
document.write("Lotto번호 : ", lottoNum);
