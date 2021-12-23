// 파일이름 : 005_path\app.js

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require("path");

console.log(`구분자 : ${path.sep}`);
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, "source"));
