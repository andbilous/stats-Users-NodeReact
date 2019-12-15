import React from 'react';
import './Header.scss';

const Header =()=>{
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="index.html">AppCo</a>
                </div>
            </nav>
        </header>
    )

};

export default Header;
