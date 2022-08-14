
import './App.css';
import Login from './components/Login';
import {Routes,Route,Link} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import QuoteOfTheDay from './pages/QuoteOfTheDay';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App' >

    
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:Id" element={<ProductDetails />} />
        <Route path="/gununsozu" element={<QuoteOfTheDay />} />

      </Routes>
      
    </div>
  );
}

export default App;
