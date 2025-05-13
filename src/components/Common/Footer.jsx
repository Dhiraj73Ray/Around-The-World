import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className ="footer">
                <div className ="footer-container">
                    <div className ="footer-about">
                        <Link to={'/'}><h3>🌍 Earth Explorer</h3></Link>
                        <p>Discover the most unique, thrilling, and beautiful places on Earth — from the sky to underwater, historic to modern.</p>
                    </div>
                    <div className ="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/catg">Categories</a></li>
                            <li><a href="/galy">Gallery</a></li>
                            <li><a href="/abt">About</a></li>
                        </ul>
                    </div>
                    <div className ="footer-contact">
                        <Link to={'/cont'}><h4>Contact Us</h4></Link>
                        <p>Email: hello@earthexplorer.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>
                <div className ="footer-bottom">
                    <p>© 2025 Earth Explorer. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer