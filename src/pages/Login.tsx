import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/buttons/Button';
import Icon from '../components/icons/Icon';
import InputField from '../components/inputs/InputField';
import Notification from '../components/notifications/Notification';
import useLocalStorage from '../hooks/LocalStorage';
import LoginResponse from '../models/LoginResponse';
import Fetch from '../services/Fetch';
import classes from './Login.module.css';

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
        <div className={classes.container}>
            <div className={classes.column}>
                <div className={classes.titles}>
                    <h1 className={classes.title}>Commercial Enerprise</h1>
                    <h3 className={classes.titleSecondary}>Вход в систему</h3>
                </div>
                <div className={classes.errorContainer}>
                    {errorMessage !== ''
                        ? <Notification type="error" showIcon>{errorMessage}</Notification>
                        : ''
                    }
                </div>
                <div className={classes.card}>
                    <div className={classes.inputGroup}>
                        <InputField
                            type="email"
                            label="Электронная почта"
                            id="emailInput"
                            placeholder="example@email.com"
                            value={email}
                            onValueChange={setEmail}
                        />
                        <InputField
                            type="password"
                            label="Пароль"
                            id="passwordInput"
                            value={password}
                            onValueChange={setPassword}
                        />
                    </div>
                    <Button onClick={() => login()}>Войти</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;