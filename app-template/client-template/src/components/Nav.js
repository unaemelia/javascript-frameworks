import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav-bar">
            <ul>
                <Link to="/"><li>Products</li></Link>
                <Link to="/manage-items"><li>Admin</li></Link>
            </ul>
        </nav>
    )
}

export default Nav