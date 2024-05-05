import React, { useState } from "react";
import {Link} from "react-router-dom";
import { register, storeToken } from "../auth/auth";

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await register(name, email, password);
            const { token } = response;
            storeToken(token);

            console.log('Registration successful!');
        } catch (error) {
            console.error(error);
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Passord:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Зарегистрироваться</button>
                <p>
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            </form>
        )
    }
};

export default RegistrationForm;