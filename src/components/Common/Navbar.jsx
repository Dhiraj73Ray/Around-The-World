import React from 'react'

function Navbar() {
    return (
        <div>
            <header className="navbar">
                <div className="logo"><a href="/">🌍</a>  <a href='/'>Earth Explorer</a></div>
                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/catg">Categories</a>
                    <a href="/galy">Gallery</a>
                    <a href="/abt">About</a>
                    <a href="/cont">Contact</a>
                </nav>
            </header>
        </div>
    )
}

export default Navbar