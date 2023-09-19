const pool = require('../config/config');

const getCandles = () => {
    return new Promise(async (resolve, reject) => {
        pool.query('SELECT * FROM candle ORDER BY candle_id ASC', (error, results) => {
            if (error) {
                reject (error)
            } else {
                resolve(results.rows);
            };
        });    
    });
};

const addCandle = (body) => {
    return new Promise(async (resolve, reject) => {
        const {candle_name, candle_scent, candle_size, candle_summary, candle_price} = body;
        pool.query('INSERT INTO candle (candle_name, candle_scent, candle_size, candle_summary, candle_price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [candle_name, candle_scent, candle_size, candle_summary, candle_price], (error, results) => {
            if(error) {
                reject ('error has occured with model', error)
            } else {
                resolve(`A new candle product has been added ${results.rows[0]}`);
            }
        });
    });
};

module.exports = {
    getCandles,
    addCandle,
}