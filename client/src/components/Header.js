import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <Link to="/" className='header-logo'><h1>Chef AI</h1></Link>
            <button className="menu-icon" onClick={toggleMenu}>
                &#9776;
            </button>
            <nav className={menuOpen ? 'nav-open' : ''}>
                <a href="/">Home</a>
                <a href="/recipes">Recipes</a>
                <a href="/create-recipe">Create Recipe</a>
                <a href="/articles">Articles</a>
            </nav>
        </header>
    );
};

export default Header;
