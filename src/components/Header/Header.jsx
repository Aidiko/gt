import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header>
			<Link to="/">Home</Link>
			<Link to="/Contact">Contact</Link>
			<Link to="/Profile">Profile</Link>
		</header>
	)
}

export default Header
