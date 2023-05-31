import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
        <Route path='/add' element={<h1>FormPage</h1>} />
      </Routes>
    </div>
  );
}

export default App;
