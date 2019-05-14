const express = require('express');
const bodyParser = require('body-parser');
//import db from './db/db';

const app = express();

//Parse incoming requests data
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {

    return res.status(200).json({ message: 'Hello world' });
});
app.get('/api/v1', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'user retrieved successfully',
        users: db });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
});