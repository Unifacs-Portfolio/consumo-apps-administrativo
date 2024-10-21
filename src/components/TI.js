import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Reutilizando a mesma estilização para manter a consistência

const Moda = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <h1 className="title">TI</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('/cadastrar-dica-tecnologia')}>Cadastrar Dica de Tecnologia</button>
                <button onClick={() => navigateTo('/cadastrar-video-tecnologia')}>Cadastrar Vídeo de Tecnologia</button>
            </div>
        </div>
    );
};

export default Moda;