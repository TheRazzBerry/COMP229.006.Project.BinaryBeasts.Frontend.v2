// Import Dependencies
import { useEffect, useState } from "react";

// Import APIs
import { getMyTournaments } from "../../datasource/api-users";
import { deleteTournament } from "../../datasource/api-tournaments";

// Import Auth
import { isAuthenticated } from "../auth/authHelper";

export default function ListMyTournaments() {
    const [myTournamentsList, setMyTournamentsList] = useState([]);

    useEffect(() => {
        getMyTournaments().then((data) => {
            if (!data) throw error;
            setMyTournamentsList(data);
        }).catch(error => { console.log(error); });
    }, []);

    const handelDelete = (id) => {
        if (!isAuthenticated()) return window.alert('You are not authenticated!')
        deleteTournament(id).then((data) => {
            console.log(data);
            window.location.reload(false);
        }).catch(error => { console.log(error); })
    }

    return (<>
        <div className="container">
            {myTournamentsList.map((tournament, tournamentIndex) => {
                return (
                    <div key={tournamentIndex} className="bg-light m-3 p-3 border rounded shadow" data-bs-theme="light">
                        <h3 className="border-bottom p-2">{tournament.name}</h3>
                        <p>{tournament.description}</p>
                        <h4 className="text-decoration-underline">Team Details</h4>
                        {tournament.teams.length == 0 && "There are no teams assigned to this tournament!"}
                        {tournament.teams.map((team, teamIndex) => {
                            return (<>
                                <div key={teamIndex} className="font-monospace">
                                    {team.teamName} : {team.points} Points
                                </div>
                            </>);
                        })}
                        {tournament.teams.map((team, teamIndex) => {
                            if (team.points == 3) {
                                return (<>
                                    <div key={teamIndex} className="font-monospace border-top border-bottom p-2">
                                        <b>Winner: {team.teamName}</b>
                                    </div>
                                </>);
                            }
                        })}
                        <button className="btn btn-dark w-100 mt-2" onClick={() => handelDelete(tournament.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    </>);
}