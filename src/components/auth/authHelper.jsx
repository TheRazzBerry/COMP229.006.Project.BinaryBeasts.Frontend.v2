// Import Dependencies
import { jwtDecode } from "jwt-decode";

const authenticate = (token) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem('token', token);

        let decoded = jwtDecode(token);
        sessionStorage.setItem('id', decoded.id);
        sessionStorage.setItem('username', decoded.name);
    }
}

const isAuthenticated = () => {
    if (typeof window === "undefined") return false;
    return !!sessionStorage.getItem('token');
}

const getToken = () => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem('token');
}

const getId = () => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem('id');
}

const getUsername = () => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem('username')
}

const clearJWT = () => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('id');
    }
}

export { authenticate, isAuthenticated, getToken, getId, getUsername, clearJWT }