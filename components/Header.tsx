"use client"
import { FaRegUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";


const Header = () => {
    const session = useSession()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary header">
            <div className="container">
                <a className="navbar-brand" href="#">Document</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="w-100 navbar-nav d-flex justify-content-end">
                        {
                            // session ?
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {
                                        session?.data?.user?.image ?
                                            <div className="rounded-circle overflow-hidden" style={{ height: "60px", width: "60px", overflow: "hidden" }}>
                                                <img className="img-fluid" src={session?.data?.user?.image} alt={session?.data?.user?.name?.slice(0, 8)} />
                                            </div>
                                            :
                                            <FaRegUserCircle className="h-100 w-100" />
                                    }
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="/api/auth/signout" >Log out</a></li>
                                </ul>
                            </li>
                            // :"Login Button"
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;