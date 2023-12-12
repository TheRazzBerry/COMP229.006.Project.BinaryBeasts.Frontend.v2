// Import Dependencies
import { useState } from "react";

// Import APIs
import { createTournament } from "../../datasource/api-tournaments";

// Import Auth
import { getId } from "../auth/authHelper";

export default function CreateTournament() {
    const [errorMessage, setErrorMessage] = useState('');
    const [tournament, setTournament] = useState({
        name: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTournament((prevTournamentData) => ({ ...prevTournamentData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newTournament = {
            name: tournament.name,
            description: tournament.description,
            owner: getId()
        }
        createTournament(newTournament).then((data) => {
            if (!data) return setErrorMessage("ERROR! Invalid Tournament Object!");
            window.location.reload(false);
        }).catch(error => {
            setErrorMessage(error.message);
            console.log(error);
        });
    }

    return (<>
        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#createTournamentForm">Create Tournament</button>
        <div className="modal fade text-light" id="createTournamentForm" tabIndex="-1" aria-labelledby="createTournamentFormLabel" aria-hidden="true" data-bs-theme="dark">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h1 className="modal-title" id="loginFormTitleLabel">Create Tournament</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <p className="flash"><span>{errorMessage}</span></p>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="mb-3 text-start">
                                <label htmlFor="tournamentName" className="form-label p-2">Tournament Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="World Championship Finals"
                                    id="tournamentName"
                                    name="name"
                                    value={tournament.name || ''}
                                    onChange={handleChange}
                                    required>
                                </input>
                                <label htmlFor="tournamentDescription" className="form-lable p-2">Description</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Write a description!"
                                    id="tournamentDescription"
                                    name="description"
                                    value={tournament.description || ''}
                                    onChange={handleChange}>
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Create</button>
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