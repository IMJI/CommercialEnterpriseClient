import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useGlobalState from '../hooks/GlobalState';
import useLocalStorage from '../hooks/LocalStorage';
import LoginResponse from '../models/LoginResponse';
import Fetch from '../services/Fetch';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage('user', {});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const login = async () => {
        const fetchLogin = new Fetch<LoginResponse>('/login');
        const response = await fetchLogin.post({ email, password });
        if (response.successful) {
            const data = response.data;
            setUser({
                email: data?.user.email,
                token: data?.token
            });
            navigate('/');
        } else {
            const error = response.error;
            setErrorMessage(error?.message || '');
        }
    }

    return (
        <div>
            {errorMessage !== '' ? <p color='red'>{errorMessage}</p> : ''}
            <input
                type="email"
                name=""
                id="emailInput"
                placeholder="Электронная почта"
                onInput={e => setEmail((e.target as HTMLInputElement).value) }
            />
            <input
                type="password"
                name=""
                id="passwordInput"
                placeholder="Пароль"
                onInput={e => setPassword((e.target as HTMLInputElement).value) }
            />
            <button onClick={login}>Войти</button>
        </div>
    );
}

export default Login;