import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Banner from '../assets/bannercs2.png'

const Header = () => {
    return (
        <div className="navbar">
            <img className="logo" src={Logo} alt="Logo AS Team" />
            <div className="bannercontainer">
                <img className="banner" src={Banner} alt="Banniere CS 2" />
                <h1>AS Team - Pickup Manager</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/match">Match</Link>
                    </li>
                    {/* <li>
                        <Link to="/players/id">Profil de John Doe</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Header
