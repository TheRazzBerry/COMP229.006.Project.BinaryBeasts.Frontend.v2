// Define Data Source
let apiURL = import.meta.env.VITE_APIURL;

// Import Auth
import { getToken } from "../components/auth/authHelper";

const listActiveTournaments = async () => {
    try {
        let response = await fetch(apiURL + 'tournaments/view/active', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) { console.log(error); }
}

const createTournament = async (tournament) => {
    try {
        let response = await fetch(apiURL + 'tournaments/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(tournament)
        });
        return await response.json();
    } catch (error) { console.log(error); }
}

const deleteTournament = async (id) => {
    try {
        let response = await fetch(apiURL + 'tournaments/delete/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
        });
        return await response.json();
    } catch (error) { console.log(error); }
}

export { listActiveTournaments, createTournament, deleteTournament };