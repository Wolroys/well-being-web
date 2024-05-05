import axios from "axios";

const baseUrl = "http://localhost:8080";

const login = async (email, password) => {
    const response = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
    });
    return response.data;
};

const register = async (name, email, password) => {
    const response = await axios.post(`${baseUrl}/user/register`, {
        name,
        email,
        password,
    });
    return response.data;
}

const fetchEvents = async (token) => {
    const response = await axios.get(`${baseUrl}/event`, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return response.data;
}

const storeToken = (token) => {
    localStorage.setItem('jwtToken', token);
};

const getToken = () => {
    return localStorage.getItem('jwtToken');
};

export {login, register, fetchEvents, storeToken, getToken};

