import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import classNames from "classnames";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-md tw-bg-[transparent] tw-p-6">
            <div className="container-fluid sm:tw-px-10">
                <div
                    className="tw-block tw-w-12 tw-h-12 
                tw-bg-white tw-rounded-[50%]
                "
                ></div>
                <div></div>
                <button
                    className="tw-text-white-purple md:tw-hidden"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars tw-font-bold tw-text-[2.5rem]"></i>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    classNames(`nav-link`, {
                                        active: isActive,
                                    })
                                }
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    classNames(`nav-link`, {
                                        active: isActive,
                                    })
                                }
                                to="/destination"
                            >
                                destination
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    classNames(`nav-link`, {
                                        active: isActive,
                                    })
                                }
                                to="/crew"
                            >
                                Crew
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    classNames(`nav-link`, {
                                        active: isActive,
                                    })
                                }
                                to="/technologies"
                            >
                                technologies
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
