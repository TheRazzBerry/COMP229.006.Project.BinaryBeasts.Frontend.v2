// Define Data Source
let apiURL = import.meta.env.VITE_APIURL;

// Import Auth
import { getToken } from "../components/auth/authHelper";

const signin = async (user) => {
    try {
        let response = await fetch(apiURL + 'users/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (error) { console.log(error); }
}

const signup = async (user) => {
    try {
        let response = await fetch(apiURL + 'users/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (error) { console.log(error); }
}

const getMyTournaments = async () => {
    try {
        let response = await fetch(apiURL + 'users/tournaments', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        });
        return await response.json();
    } catch (error) { console.log(error); }
}

export { signin, signup, getMyTournaments };