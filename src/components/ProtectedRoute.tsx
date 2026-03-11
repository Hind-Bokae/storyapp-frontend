import {Navigate} from "react-router-dom";
import {isUserLoggedIn} from "../services/authService";

type ProtectedRouteProps = {
    children: React.ReactNode;
}
export default function ProtectedRoute({children}: ProtectedRouteProps) {
    if (!isUserLoggedIn()) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
}