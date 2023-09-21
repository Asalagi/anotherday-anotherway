import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

function CandlePage() {
    const { candle_id } = useParams();
    const navigate = useNavigate();
    const [candle, setCandle] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/candles/${candle_id}`)
        .then(response => setCandle(response.data))
        .catch(error => console.log(error))
    }, [candle_id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/candles/${candle_id}`)
        .then(response => {
            console.log(`Candl with id of ${candle_id} has been deleted`, response);
            navigate('/seecandles');
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
                    {candle.candle_id} - 
                    {candle.candle_name} -
                    {candle.candle_scent} - 
                    {candle.candle_size} oz. -
                    {candle.candle_summary}<br/>
                    <button onClick={handleDelete}>Delete</button><br/>
                    <button>Edit</button>
        </div>
    )
}

export default CandlePage;