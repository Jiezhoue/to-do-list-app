import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/add' element={<h1>FormPage</h1>} />
      </Routes>
    </div>
  );
}

export default App;
