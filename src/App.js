import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AdvocatePage from './pages/AdvocatePage'
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route element={<HomePage/>} path='' />
          <Route element={<AdvocatePage/>} path='/advocate/:username' />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
