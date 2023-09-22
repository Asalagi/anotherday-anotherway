const pool = require('../config/config');

const getCandles = () => {
    return new Promise(async (resolve, reject) => {
        pool.query('SELECT * FROM candle ORDER BY candle_id ASC', (error, results) => {
            if (error) {
                reject ('something has been rejcts', error)
            } else {
                resolve(results.rows);
            };
        });    
    });
};

const getCandlesId = (candle_id) => {
    return new Promise(async (resolve, reject) => {
        pool.query('SELECT * FROM candle WHERE candle_id = $1', [candle_id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows[0]);
            }
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

const updateCandle = (candle_id, candleUpdate) => {
    return new Promise(async (resolve, reject) => {
        const {candle_name, candle_scent, candle_size, candle_summary, candle_price} = candleUpdate;
        pool.query('UPDATE candle SET candle_name= $1, candle_scent= $2, candle_size= $3, candle_summary= $4, candle_price= $5 WHERE id = $1', [candle_id], (error, results) => {
            [candle_name, candle_scent, candle_size, candle_summary, candle_price], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`candle with id of ${candle_id} was updated`)
                }
            }
        })
    })
}

const deleteCandle = (candle_id) => {
    return new Promise(async (resolve, reject) => {
        pool.query('DELETE FROM candle WHERE candle_id = $1', [candle_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(`candle with id of ${candle_id} was deleted`)
            }
        });
    });
};

module.exports = {
    getCandles,
    getCandlesId,
    addCandle,
    updateCandle,
    deleteCandle,
}