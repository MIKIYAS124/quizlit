import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const loginUser = async (credentials) => {
    return await axios.post(`${API_URL}/api/token/`, credentials);
};

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register/`, userData);
};

export const getBooks = async (token) => {
    return await axios.get(`${API_URL}/books/`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
