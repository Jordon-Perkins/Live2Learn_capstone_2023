import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/">Classes</Link>
                <Link className="nav-link" to="/instructors">Instructors</Link>
                <Link className="nav-link" to="/classes/{id}">My Classes</Link>
                <Link className="nav-link" to="/classes/new">Teach A Class</Link>
            </li>
            {
                (localStorage.getItem("l2l_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("l2l_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
