import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand">Live2Learn</h1>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center">
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
        </>
    )
}
