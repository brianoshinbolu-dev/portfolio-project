import React from 'react';
import './navbar.css';


function NavBar(){
	return (
		<React.Fragment >
		<ul className='nav navbar navbar-expand-lg bg-light p-3'>
			<li className='nav-link'><h1>Brian Oshinbolu</h1></li>
			<ul className='nav-links'>
				<li className='nav-link p-3'>About</li>
				<li className='nav-link p-3'>Service</li>
				<li className='nav-link p-3'>Contact me</li>
			</ul>
		</ul>
		</React.Fragment>
		)
}

export default NavBar;