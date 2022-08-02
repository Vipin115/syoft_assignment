import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<Register />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/addproducts" element={<Products />}></Route>
       </Routes>
    </div>
  );
}

export default App;