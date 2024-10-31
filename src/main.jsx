import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SendDisponibilidade from './components/disponibilidades/SendDisponibilidade';
import Admin from './components/Admin/Admin';
import LogAdm from './components/login/LogAdm';

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
