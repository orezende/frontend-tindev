import React, { useState } from 'react';

import api from '../services/api';

import logo from '../assets/logo.svg';

import './Login.css';

export default function Login({ history }) {
    const [userName, setUserName] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('devs', {
            username: userName,
        });

        const { _id } = response.data;

        console.log(response);

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"></img>
                <input
                    placeholder="Digite seu usuário no GitHub"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}