const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const port = 3001;

app.get('/', (req, res) => {
    res.send(`Hi from ${port}`);
});

app.listen(port, ()=> {
    console.log(`express server is running on ${port}`);
});