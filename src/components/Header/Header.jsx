import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<div className="header-text">
				<h1>Vector Header</h1>
				<p>Place your text here</p>
				<p className="small">Place your text here</p>
			</div>
		</header>
	)
}

export default Header
