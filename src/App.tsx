import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './App/pages/LoginPage';
import './index.css'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';



//bloup


function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
