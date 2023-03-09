import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/">Classes</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/classes">My Classes</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/classes/new">Teach A Class</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/instructors">Instructors</Link>
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
            // <>
            // <div class="collapse" id="navbarToggleExternalContent">
            //     <div class="bg-dark p-4">
            //         <h5 class="text-white h4">Collapsed content</h5>
            //         <ul class="dropdown-menu">
            //             <li><a class="dropdown-item" href="/">Classes</a></li>
            //             <li><a class="dropdown-item" href="/classes">My Classes</a></li>
            //             <li><a class="dropdown-item" href="classes/new">Teach A Class</a></li>
            //             <li><a class="dropdown-item" href="/instructors">Instructors</a></li>
            //         </ul>
            //         <span class="text-muted">Toggleable via the navbar brand.</span>
            //     </div>
            //     </div>
            //     <nav class="navbar navbar-dark bg-dark">
            //     <div class="container-fluid">
            //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //         </button>
            //     </div>
            //     </nav>
            // </>
    )
}
