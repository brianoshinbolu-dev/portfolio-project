import React from 'react';
import NavBar  from '../navbar/NavBar';
import './hero.css';


export default function Hero(){
	return (
		<React.Fragment className='n'>
		<NavBar />
		
		<div className='container'>
			<div className='hero-detail'>
				<p>Hi</p>
				<h3>I AM BRIAN OSHINBOLU</h3>
				<h1>FrontEnd Developer</h1>
				<p>In the Making</p>
				<img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt='linkedln-logo'/>
				<img src="https://img.icons8.com/sf-regular/48/000000/github.png" alt='github-logo'/>
			</div>
			<div className='headshot'>
				<img src='' alt='' />
			</div>
		</div>
		</React.Fragment>
	)
}