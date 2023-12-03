// Import Dependencies
import { useState } from 'react';
import { Link, useNavigation, useLocation, useNavigate } from 'react-router-dom';

// Import APIs
import { signin } from '../../datasource/api-users';

// Import Components
import { authenticate } from '../auth/authHelper';

export default function SigninForm() {
    const { state } = useLocation();
    const { from } = state || { from: { pathname: '/' } }

    let navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFromData) => ({ ...prevFromData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signin(user).then((data) => {
            if (!data) return setErrorMessage("ERROR MESSAGE");
            authenticate(data.token, () => {
                navigate(from, { replace: true });
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
                <label htmlFor="loginEmail" className="form-label">Email Address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="name@email.com"
                    id="loginEmail"
                    name="email"
                    value={user.email || ''}
                    onChange={handleChange}
                    required>
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder=""
                    name="password"
                    value={user.password || ''}
                    onChange={handleChange}
                    required>
                </input>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    </>)
}