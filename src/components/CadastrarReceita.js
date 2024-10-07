// src/components/CadastrarReceita.js
import React, { useState } from 'react';

const CadastrarReceita = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Receita:', { nome, descricao });
        // Aqui podemos enviar os dados para uma API futuramente
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Receita</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome da Receita:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Descrição da Receita:</label>
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

export default CadastrarReceita;
