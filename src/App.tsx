import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import OneProjectDetailPage from './Pages/OneProjectDetailPage';
import AccountPage from './Pages/AccountPage';
import ProtectedRoute from './App/ProtectedRoute';
import OneProjectUserDetailPage from './Pages/OneProjectDetailPage';
import { useGetOneProjectQuery } from './App/API/projects';
import { useGetOneUserProjectQuery } from './App/API/authAPI';



export type RouterParams = {
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
        <Route path="/project/:id" element={<OneProjectDetailPage isUser={false} queryType={useGetOneProjectQuery} />} />
        <Route path="/user/project/:id" element={
          <ProtectedRoute>
            <OneProjectDetailPage isUser={true} queryType={useGetOneUserProjectQuery} />
          </ProtectedRoute>} />
        <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
