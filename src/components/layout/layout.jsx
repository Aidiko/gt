import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import './layout.css'

function Layout() {
	return (
		<>
		<div className='main-first'>
			<Header />
			<main className='main-second'>
				<Outlet />
			</main>
			<Footer />
		</div>
		</>
	)
}

export default Layout
