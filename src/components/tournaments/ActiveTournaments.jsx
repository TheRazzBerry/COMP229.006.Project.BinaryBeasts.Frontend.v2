// Import Dependencies
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import APIs
import { listActiveTournaments } from "../../datasource/api-tournaments";

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
                        <p>{tournament.description}</p>
                        <h4 className="text-decoration-underline">Team Details</h4>
                        {tournament.teams.map((team, teamIndex) => {
                            return (<>
                                <div className="font-monospace" key={teamIndex}>
                                    {team.teamName} : {team.points} Points
                                </div>
                            </>);
                        })}
                        <h4 className="text-decoration-underline">Winner</h4>
                        {tournament.teams.map((team, teamIndex) => {
                            if (team.points == 3) {
                                return (<>
                                    <div className="font-monospace" key={teamIndex}>
                                        {team.teamName} : {team.points} Points
                                    </div>
                                </>);
                            }
                        })}
                    </div>
                );
            })}
        </div>
    </>);
}