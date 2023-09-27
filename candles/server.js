
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const candleModel = require('./models/candle-model');
const memberModel = require('./models/user-model');
const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`Hi from ${port}`);
});

app.get('/candles', (req, res) => {
    candleModel.getCandles()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.get('/candles/:candle_id', (req, res) => {
    candleModel.getCandlesId(req.params.candle_id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.delete('/candles/:candle_id', (req, res) => {
    candleModel.deleteCandle(req.params.candle_id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.post('/candles', (req, res) => {
    candleModel.addCandle(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.get('/members', (req, res) => {
    memberModel.getMember()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.post('/members', (req, res) => {
    memberModel.addMember(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.listen(port, ()=> {
    console.log(`express server is running on ${port}`);
});