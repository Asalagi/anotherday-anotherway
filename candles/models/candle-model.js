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

module.exports = {
    getCandles,
}