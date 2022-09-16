import React from 'react';
import './navbar.css';


function NavBar(){
	return (
		<React.Fragment >
		<ul className='nav navbar navbar-expand-lg bg-light p-3'>
			<li className='nav-link'><h1>Brian Oshinbolu</h1></li>
			<ul className='nav-links'>
				<a href='#aboutme'><li className='nav-link p-3'>About</li></a>
{/*				<a href='#service'><li className='nav-link p-3'>Service</li></a>
*/}				<a href='#contactme'><li className='nav-link p-3'>Contact me</li></a>
			</ul>
		</ul>
		</React.Fragment>
		)
}

export default NavBar;