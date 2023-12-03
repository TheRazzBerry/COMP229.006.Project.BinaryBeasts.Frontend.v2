// Import Components
import AuthModal from "../auth/authModal";
import { isAuthenticated } from "../auth/authHelper";

export default function NavButton() {
    function NavToggler(props) {
        return (<>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navMenu">
                <div className="navbar-nav">
                    <a className="nav-link" href="users">My Tournaments</a>
                </div>
            </div>
        </>);
    }

    function SigninButton(props) {
        return (<>
            <button className="btn btn-dark border" data-bs-toggle="modal" data-bs-target="#loginForm">Login</button>
            <AuthModal />
        </>);
    }

    function SetNavButton(props) {
        const isLoggedin = props.isLoggedin;
        if (!isLoggedin) return (<SigninButton />);
        return (<NavToggler />);
    }

    return (<>
        <SetNavButton isLoggedin={isAuthenticated()} />
    </>);
}