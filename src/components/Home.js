// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <h1 className="title">Culinária e Gastronomia</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('/cadastrar-receita')}>Cadastrar Receita</button>
                <button onClick={() => navigateTo('/cadastrar-dica')}>Cadastrar Dica</button>
                <button onClick={() => navigateTo('/editar')}>Editar Receita/Dica</button>
            </div>
        </div>
    );
};

export default Home;
