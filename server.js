const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/', require('./controller/hello'));

const port = process.env.PORT;
app.listen(port, function () {
  console.log('listening on port ... ' + port);
});