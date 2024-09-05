import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ background: '#61dafb', padding: '0.5rem' }}>
            <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
            <Link to="/addData" style={{ margin: '0 1rem' }}>Add Data</Link>
            <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
        </nav>
    );
};

export default NavBar;
