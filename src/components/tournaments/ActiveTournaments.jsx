// Import Dependencies
import { useEffect, useState } from "react";

// Import APIs
import listActiveTournaments from "../../datasource/api-tournaments";

export default function ActiveTournaments() {
    const [activeTournamentList, setActiveTournamentList] = useState([]);

    useEffect(() => {
        listActiveTournaments().then((data) => {
            if (!data) throw error;
            setActiveTournamentList(data);
        }).catch(error => { console.log(error); });
    }, []);

    return (<>
        <div className="container">
            {activeTournamentList.map((tournament, index) => {
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