import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="saved"
                    className={
                        window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
                    }
                >
                Saved articles
                </Link>
            </li>
        </ul>
    </div>
)

export default NavTabs;