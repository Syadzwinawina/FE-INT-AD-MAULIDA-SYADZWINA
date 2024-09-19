import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/homepage';
import Register from './pages/register';
import ProductPage from './pages/produkpage';
import HomePage from './pages/homepage';
import OrdersPage from './pages/orderspage';
import ProfilPage from './pages/profilpage';
import PemesananPage from './pages/rpemesananpage';
import PasswordPage from './pages/passwordpage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilPage />} />
        <Route path="/rpemesanan" element={<PemesananPage />} />
        <Route path="/rpassword" element={<PasswordPage />} />


      </Routes>
    </Router>
  );
};

export default App;
