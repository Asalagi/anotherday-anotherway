
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandleHome from './home';
import AddCandle from './addcandle';
import SeeCandles from './seecandles';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CandleHome/>}/>
      <Route path="/addcandle" element={<AddCandle/>}/>
      <Route path="/seecandles" element={<SeeCandles/>}/>
    </Routes>
    </Router>
    );
}

export default App;
