import { BrowserRouter, Routes, Route } from react-router-dom;
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CandleHome/>}/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
