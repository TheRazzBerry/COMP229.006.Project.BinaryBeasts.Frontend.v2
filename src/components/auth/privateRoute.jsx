// Import Dependencies
import { Navigate, useLocation } from "react-router-dom";

// Import Components
import { isAuthenticated } from "./authHelper";

export default function PrivateRoute({ children }) {
    let location = useLocation();
    if (!isAuthenticated()) {
        return (<Navigate to="/" state={{ from: location.pathname }} />);
    }
    return children;
}