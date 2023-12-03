// Import Components
import NavButton from "./navButton";

export default function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-xxl bg-dark-subtle shadow" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Tournament Maker
                </a>
                <NavButton />
            </div>
        </nav>
    </>);
}