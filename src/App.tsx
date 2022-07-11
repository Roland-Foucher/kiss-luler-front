import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import { LoginPage } from './Pages/LoginPage';



//bloup


function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
