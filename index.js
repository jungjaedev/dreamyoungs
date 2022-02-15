const express = require('express');
const dotEnv = require('dotenv');
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

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://example.com');
  res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.hostname === 'hc.check/_ah/health') {
    res.status(200).send('OK');
  }
});
app.use('/test1', test1Router);
app.use('/test2', test2Router);
app.use('/delay', delayRouter);
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
