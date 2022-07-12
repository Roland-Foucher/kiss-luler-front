import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import OneProjectDetailPage from './Pages/OneProjectDetailPage';



export type RouterParams  = {
  id: string
}


function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<OneProjectDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
