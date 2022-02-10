const express = require('express');
const dotEnv = require('dotenv');
const { sequelize } = require('./models');
const cookieParser = require('cookie-parser');

const test1Router = require('./router/test1.js');
const test2Router = require('./router/test2');
const delayRouter = require('./router/delay');
const userRouter = require('./router/user');

dotEnv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://example.com');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(cookieParser());

app.use('/test1', test1Router);
app.use('/test2', test2Router);
app.use('/delay', delayRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
