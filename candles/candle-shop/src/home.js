import { Link } from 'react-router-dom';

function CandleHome() {
    return (
        <div>
            <h1>Welcome to Scents of Sense Candle Shop.</h1>
            <Link to="signup">Sign Up</Link> -
            <Link to="addcandle">Add Candle</Link> - 
            <Link to="seecandles">See Candles</Link>
        </div>
    );
}

export default CandleHome;