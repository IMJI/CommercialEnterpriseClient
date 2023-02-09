import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useGlobalState from '../hooks/GlobalState';
import useLocalStorage from '../hooks/LocalStorage';
import LoginResponse from '../models/LoginResponse';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage('user', {});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const login = async () => {
        try {
            const res = await axios.post('https://localhost:8080/login', {
                email,
                password
            });
            const data = (res.data) as LoginResponse;

            setUser({
                email: data.user.email,
                token: data.token
            });
            navigate('/');
        } catch (e) {
            const error = e as AxiosError;
            const errorRes = error.response?.data as Error;
            setErrorMessage(errorRes.message);
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