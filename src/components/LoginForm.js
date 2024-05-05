import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { login, storeToken } from "../auth/auth";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(email, password);
            const { token } = response;
            storeToken(token);
      
            console.log('Login successful!');
          } catch (error) {
            console.error(error);
          }
        };

        return (
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
              <label>Пароль:</label>
              <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
              <button type="Submit">Войти</button>
              <p>
                Еще нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
              </p>
            </form>
          );
        };

export default LoginForm;
    