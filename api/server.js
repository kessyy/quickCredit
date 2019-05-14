const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const user = require('./src/routes/user');

const app = express();
app.use(cors());

 //Parse incoming requests data
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', (req, res) => {
  return res.status(200).json({ message: 'Hello and welcome to QuickCredit' });
});
app.use('/api/v1/auth', user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`)
});
module.exports = app
