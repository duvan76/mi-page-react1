import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header className="main-header">
            <nav>
                <Link to="/">Directory</Link>
                <Link to="/restaurants">Restaurants</Link>
                <Link to="/search">Search</Link>
                <Link to="/new">New</Link>
            </nav>
        </header>
    );
};

export default Header;