import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './App/pages/LoginPage';
import './index.css'






function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/login" element = {<LoginPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
