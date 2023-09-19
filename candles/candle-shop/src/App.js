
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandleHome from './home';
import AddCandle from './addcandle';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CandleHome/>}/>
      <Route path="/addcandle" element={<AddCandle/>}/>
    </Routes>
    </Router>
    );
}

export default App;
