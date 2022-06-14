import React from "react";
import {Link} from "react-router-dom";

function Topbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/app">App</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Topbar;