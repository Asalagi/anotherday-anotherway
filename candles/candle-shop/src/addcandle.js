import axios from 'axios';
import { useState } from 'react';

//HAVE FUN REPEATING 5 TIMES!

function AddCandle() {
    const [candle, setCandle] = useState({
            candle_name: '',
            candle_scent: '',
            candle_size: '',
            candle_price: '',
            candle_summary: '',
        });

// forgot the fuckin comma after value!
    const handleChange = (e) => {
        const value = e.target.value;
        setCandle({
            ...candle,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCandle = {
            candle_name: candle.candle_name,
            candle_scent: candle.candle_scent,
            candle_size: candle.candle_size,
            candle_price: candle.candle_price,
            candle_summary: candle.candle_summary,
        };

        axios.post("http://localhost:3001/candles", newCandle)
        .then(response => {
            console.log('a candle was added', response);
        })
        .catch(error => {
            console.log("there was an error", error);
        });
    };

    return (
        // MAKE SURE NAME MATCHED THE VALUES YOU ARE TRYING TO PASS DUMDUM
        <div>
            <h1>Add A Candle</h1>
            <form onSubmit={handleSubmit}> 
                <label>Candle Name </label><input type="text" name="candle_name" value={candle.candle_name} onChange={handleChange}/><br/>
                <label>Candle Scent </label><input type="text" name="candle_scent" value={candle.candle_scent} onChange={handleChange}/><br/>
                <label>Candle Size </label><input type="text" name="candle_size" value={candle.candle_size} onChange={handleChange}/><br/>
                <label>Candle Price </label><input type="text" name="candle_price" value={candle.candle_price} onChange={handleChange}/><br/>
                <label>Candle Summary </label><textarea name="candle_summary" value={candle.candle_summary} onChange={handleChange}/><br/>
                <button type="submit">Add Candle</button>
            </form>
            
        </div>
    );
}

export default AddCandle;