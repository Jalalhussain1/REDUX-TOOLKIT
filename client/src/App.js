import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartDetails/>} />
      </Routes>
    

    </>
  );
}

export default App;
