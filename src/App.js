import { Route, Router } from 'react-router';
import { BrowserRouter,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Cart from './Components/Pages/Cart/Cart';
import Checkout from './Components/Pages/Checkout/Checkout';
import ForgetPassword from './Components/Pages/ForgetPassword/ForgetPassword';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Shop from './Components/Pages/Shop/Shop';
import Wishlist from './Components/Pages/Wishlist/Wishlist';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
