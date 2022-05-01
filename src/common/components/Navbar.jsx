import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [current, setCurrent] = useState('');
    const { pathname } = useLocation();

    useEffect(() => {
        if(pathname.startsWith('/')) setCurrent('Home');
        if(pathname.startsWith('/search')) setCurrent('Search');
        if(pathname.startsWith('/country')) setCurrent('Country');
        if(pathname.startsWith('/genre')) setCurrent('Genre');
    }, [pathname])

    useEffect(() => {
        let id = `#${current.toLowerCase() || 'home'}`;

        document.querySelectorAll('.nav-link').forEach(el => {
            if(el.innerText !== current) {
                el.classList.remove('active')
            } else {
                el.classList.add('active')
            }
        })
        console.log(current);
    }, [current])
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    INDOXXI CINEMA
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" id="home" onClick={e => setCurrent(e.target.innerText)} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="genre" onClick={e => setCurrent(e.target.innerText)} to="/genre">Genre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="country" onClick={e => setCurrent(e.target.innerText)} to="/country">Country</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="search" onClick={e => setCurrent(e.target.innerText)} to="/search">Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar