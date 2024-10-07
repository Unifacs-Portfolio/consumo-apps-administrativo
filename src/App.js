import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CadastrarReceita from './components/CadastrarReceita';
import CadastrarDica from './components/CadastrarDica';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar-receita" element={<CadastrarReceita />} />
          <Route path="/cadastrar-dica" element={<CadastrarDica />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
