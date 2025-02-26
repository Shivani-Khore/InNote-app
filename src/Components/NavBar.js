import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token on logout
        navigate("/login"); // Redirect to login page
        console.log(localStorage.getItem('token')); // It should log null after logout
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} to="/home">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li> */}
                    </ul>
                    {/* Conditional rendering for login/logout */}
                    {!localStorage.getItem('token') ? (
                        <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form>
                    ) : (
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
