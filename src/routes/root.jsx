// Import Components
import Navbar from "../components/navbar";
import ActiveTournaments from "../components/ActiveTournaments";

export default function Root() {
    return (<>
        <Navbar />
        <div className="container border-bottom border-dark-subtle">
            <div className="mt-3 p-3 text-center">
                <h1>Welcome!</h1>
                <p>View all active tournaments below</p>
            </div>
        </div>
        <ActiveTournaments />
    </>);
}