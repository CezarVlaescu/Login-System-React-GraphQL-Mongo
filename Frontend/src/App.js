import './App.css';
import Login from './Auth/auth';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} /> 
      </Routes>
    </div>
  );
}

export default App;
