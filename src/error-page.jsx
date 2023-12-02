import { useRouteError } from "react-router-dom";

// Import Components
import Navbar from "./components/nav/navbar";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (<>
        <Navbar />
        <div className="container">
            <div id="error-page" className="bg-light m-3 p-3 border rounded shadow" data-bs-theme="light">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p><i>{error.statusText || error.message}</i></p>
            </div>
        </div>
    </>);
}