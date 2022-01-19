const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB 연결 완료!"))
  .catch((err) => console.log(err));

app.listen("8080", () => {
  console.log("노드 실행 중");
});