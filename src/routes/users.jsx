// Import Components
import Navbar from "../components/nav/navbar";
import ListMyTournaments from "../components/tournaments/ListMyTournaments";

// Import APIs
import { getUsername } from "../components/auth/authHelper";

export default function Tournaments() {
    return (<>
        <Navbar />
        <div className="container border-bottom border-dark-subtle">
            <div className="mt-3 p-3 text-center">
                <h1>Hello {getUsername()}</h1>
                <p>View your tournaments below</p>
            </div>
        </div>
        <ListMyTournaments />
    </>);
}