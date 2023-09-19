import { Link } from 'react-router-dom';

function CandleHome() {
    return (
        <div>
            <h1>Welcome to Scents of Sense Candle Shop.</h1>
            <Link to="addcandle">Add Candle</Link>
        </div>
    );
}

export default CandleHome;