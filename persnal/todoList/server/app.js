const express = require('express');
const app = express();
// 환경변수
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const db = require('./models');

// app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// server
db.sequelize.sync({ force: false }).then(() => {
  // force: false; 실제 데이터베이스에 테이블이 존재하지 않으면 모델에 정의한대로 생성
  // force: true; 데이터베이스에 테이블 있어도 무조건 생성
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
