
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandleHome from './home';
import AddCandle from './addcandle';
import SeeCandles from './seecandles';
import CandlePage from './candlepage';
import SignUp from './signup';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CandleHome/>}/>
      <Route path="/addcandle" element={<AddCandle/>}/>
      <Route path="/seecandles" element={<SeeCandles/>}/>
      <Route path="/candles/:candle_id" element={<CandlePage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </Router>
    );
}

export default App;
