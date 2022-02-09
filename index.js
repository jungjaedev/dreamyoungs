const express = require('express');
const dotEnv = require('dotenv');
const { sequelize } = require('./models');

dotEnv.config();
const PORT = process.env.PORT;
const app = express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
