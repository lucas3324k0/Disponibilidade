import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SendDisponibilidade from './components/disponibilidades/SendDisponibilidade';
import LogAdm from './components/login/LogAdm';
import Admin from './components/Admin/AdminComponent';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/send" element={<SendDisponibilidade />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/loginAdm" element={<LogAdm />}/>
      </Routes>
    </Router>
  </StrictMode>,
);
