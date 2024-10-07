// src/components/CadastrarDica.js
import React, { useState } from 'react';

const CadastrarDica = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dica:', { nome, descricao });
        // Enviar os dados para uma API ou manipular de outra forma
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Dica</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome da Dica:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Descrição da Dica:</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarDica;
