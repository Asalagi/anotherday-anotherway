import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function CandlePage() {
    const { candle_id } = useParams();
    const [candle, setCandle] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/candles/${candle_id}`)
        .then(response => setCandle(response.data))
        .catch(error => console.log(error))
    }, [candle_id]);

    return (
        <div>
                    {candle.candle_id} - 
                    {candle.candle_name} -
                    {candle.candle_scent} - 
                    {candle.candle_size} oz. -
                    {candle.candle_summary}<br/>
                    <button>Delete</button><br/>
                    <button>Edit</button>
        </div>
    )
}

export default CandlePage;