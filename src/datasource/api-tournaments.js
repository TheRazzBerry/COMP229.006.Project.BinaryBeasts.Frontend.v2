// Define Data Source
let apiURL = import.meta.env.VITE_APIURL;

const listActiveTournaments = async () => {
    try {
        let response = await fetch(apiURL + 'tournaments/view/active', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json();
    } catch (error) { console.log(error); }
}

export default listActiveTournaments;