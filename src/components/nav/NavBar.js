import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand">Live2Learn</h1>
            <div id="navbarNav" className="justify-content-center">
                <ul className="navbar-nav">
                    {
                        (localStorage.getItem("l2l_token") !== null) 
                        ?
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instructors">Instructors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/classes">My Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/classes/new">Teach A Class</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={() => {
                                        localStorage.removeItem("l2l_token")
                                    }}>Logout</Link>
                            </li> 
                        </>
                        :
                        <>
                            <div className="main">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            </div>
                        </>
                    }
                </ul>
            </div>
        </nav>
        </>
    )
}
