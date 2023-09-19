import axios from 'axios';
import { useState } from 'react';

function AddCandle() {
    const [candle, setCandle] = useState({
            canlde_name: '',
            candle_scent: '',
            candle_size: '',
            candle_price: '',
            candle_summary: '',
        });

    const handleChange = (e) => {
        setCandle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    axios.post('localhost:3001/candles', { candle })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.error(error);
        });

    return (
        <div>
            <h1>Add A Candle</h1>
            <form onSubmit={handleSubmit}>
                <label>Candle Name </label><input type="text" name="candle name" onChange={handleChange} /><br/>
                <label>Candle Scent </label><input type="text" name="candle scent" onChange={handleChange} /><br/>
                <label>Candle Size </label><input type="text" name="candle size" onChange={handleChange} /><br/>
                <label>Candle Price </label><input type="text" name="candle price" onChange={handleChange} /><br/>
                <label>Candle Summary </label><textarea name="candle summary" onChange={handleChange} /><br/>
                <button type="submit">Add Candle</button>
            </form>
            
        </div>
    );
}

export default AddCandle;