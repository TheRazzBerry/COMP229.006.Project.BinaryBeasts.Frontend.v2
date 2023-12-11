// Import Dependencies
import { useState } from 'react';

// Import APIs
import { signup, signin } from '../../datasource/api-users';

// Import Components
import { authenticate } from './authHelper';

export default function RegisterForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUserData) => ({ ...prevUserData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        signup(user).then((data) => {
            if (!data) return setErrorMessage("REG ERROR!");
            let loginUser = {
                email: user.email,
                password: user.password
            }
            signin(loginUser).then((data) => {
                if (!data) return setErrorMessage("LOG ERROR!");
                authenticate(data.token);
                window.location.reload(false);
            }).catch(error => {
                setErrorMessage(error.message);
                console.log(error);
            });
        }).catch(error => {
            setErrorMessage(error.message);
            console.log(error);
        });


    }

    return (<>
        <p className="flash"><span>{errorMessage}</span></p>
        <form onSubmit={handleSubmit} className="form">
            <div className="mb-3">
                <label htmlFor="registerName" className="form-label">User Name</label>
                <input
                    type="text"
                    autoComplete="username"
                    className="form-control"
                    id="registerName"
                    placeholder="JohnSmith"
                    name="name"
                    value={user.name || ''}
                    onChange={handleChange}
                    required>
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">Email Address</label>
                <input
                    type="email"
                    autoComplete="email"
                    className="form-control"
                    id="registerEmail"
                    placeholder='name@email.com'
                    name="email"
                    value={user.email || ''}
                    onChange={handleChange}
                    required>
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="********"
                    name="password"
                    value={user.password || ''}
                    onChange={handleChange}
                    required>
                </input>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
        </form >
    </>)
}