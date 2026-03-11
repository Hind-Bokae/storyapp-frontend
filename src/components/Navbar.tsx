import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export default function Navbar() {
    const {isLoggedIn, logout} = useAuth();
    return (
        <nav style={{
            padding: "10px",
            borderBottom: "1px solid #ddd",
            marginBottom: "20px"
            }}>
            <Link to="/" style={{marginRight:"15px" }}>
            Home
            </Link>
            {" | "}
            {!isLoggedIn && (
                <Link to="/login" style={{marginRight:"15px" }} >Login</Link>)
            }
            {isLoggedIn && (
                <>
                    <Link to="/create-story" style={{marginRight:"15px" }}>Create Story</Link>
                    {" | "}
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </nav>
    );
}