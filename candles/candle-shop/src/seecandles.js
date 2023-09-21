import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SeeCandle() {
    const [seeCandles, setSeeCandles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/candles/')
        .then(response => setSeeCandles(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            {seeCandles.map((candle) => (
                <div key={candle.candle_id}>
                    {candle.candle_id} - 
                    <Link to={`/candles/${candle.candle_id}`}>{candle.candle_name}</Link> -
                    {candle.candle_scent} - 
                    {candle.candle_size} -
                    {candle.candle_summary}
                </div>
            ))}
        </div>
    )
}

export default SeeCandle;