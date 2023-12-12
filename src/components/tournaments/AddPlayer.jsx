// Import Dependencies
import { useState } from "react";
import { getTournamentById } from "../../datasource/api-tournaments";

export default function AddTeam() {
    const [errorMessage, setErrorMessage] = useState('');
    const [team, setTeam] = useState({
        teamName: '',
        teamNotes: '',
        points: 0
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTournament((prevTournamentData) => ({ ...prevTournamentData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (<>
        <button className="btn btn-dark mt-2 ms-2" data-bs-toggle="modal" data-bs-target="#AddTeamForm">Add Team</button>
        <div className="modal fade text-light" id="AddTeamForm" tabIndex="-1" aria-labelledby="createTournamentFormLabel" aria-hidden="true" data-bs-theme="dark">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h1 className="modal-title" id="loginFormTitleLabel">Edit Tournament</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <p className="flash"><span>{errorMessage}</span></p>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="mb-3 text-start">
                                <label htmlFor="teamName" className="form-label">Team Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="BinaryBeasts"
                                    id="teamName"
                                    name="teamName"
                                    value={team.teamName || ''}
                                    onChange={handleChange}
                                    required>
                                </input>
                                <label htmlFor="teamNotes" className="form-label">Team Name</label>
                                <textarea
                                    className="form-control"
                                    placeholder="BinaryBeasts"
                                    id="teamName"
                                    name="teamName"
                                    value={team.teamName || ''}
                                    onChange={handleChange}>
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Add</button>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </>);
}