
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandleHome from './home';
import AddCandle from './addcandle';
import SeeCandles from './seecandles';
import CandlePage from './candlepage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CandleHome/>}/>
      <Route path="/addcandle" element={<AddCandle/>}/>
      <Route path="/seecandles" element={<SeeCandles/>}/>
      <Route path="/candles/:candle_id" element={<CandlePage/>}/>
    </Routes>
    </Router>
    );
}

export default App;
