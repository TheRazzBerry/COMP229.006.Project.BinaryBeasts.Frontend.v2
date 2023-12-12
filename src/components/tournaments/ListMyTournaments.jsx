// Import Dependencies
import { useEffect, useState } from "react";

// Import APIs
import { getMyTournaments } from "../../datasource/api-users";

export default function ListMyTournaments() {
    const [myTournamentsList, setMyTournamentsList] = useState([]);

    useEffect(() => {
        getMyTournaments().then((data) => {
            if (!data) throw error;
            setMyTournamentsList(data);
        }).catch(error => { console.log(error); });
    }, []);

    return (<>
        <div className="container">
            {myTournamentsList.map((tournament, index) => {
                return (
                    <div key={index} className="bg-light m-3 p-3 border rounded shadow" data-bs-theme="light">
                        <h3 className="border-bottom p-2">{tournament.name}</h3>
                        {tournament.description}
                    </div>
                );
            })}
        </div>
    </>);
}