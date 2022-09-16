import React from 'react';
import './skills.css';



export default function Skills(){
	return(
		<React.Fragment >
		<div className='skills'>
		<h1>My Skills</h1>
		<p>Here are a few skills i possess</p>
		<div className='stack'>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/html-5--v1.png"/>
			<div className='progress-info'>
				<p>HTML</p>
				<progress id="file" value="95" max="100"> 85% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/html-5--v1.png"/>
			<div className='progress-info'>
				<p>CSS</p>
				<progress id="file" value="90" max="100"> 90% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/javascript-logo.png"/>
			<div className='progress-info'>
				<p>JAVSCRIPT</p>
				<progress id="file" value="89" max="100"> 89% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/dotty/70/000000/react.png"/>
			<div className='progress-info'>
				<p>REACT</p>
				<progress id="file" value="70" max="100"> 70% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/python.png"/>
			<div className='progress-info'>
				<p>PYTHON</p>
				<progress id="file" value="90" max="100"> 90% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/git.png"/>
			<div className='progress-info'>
				<p>GIT</p>
				<progress id="file" value="70" max="100"> 70% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/small/70/000000/bash.png"/>
			<div className='progress-info'>
				<p>BASH</p>
				<progress id="file" value="70" max="100"> 70% </progress>
			</div>
		</div>

		</div>
		</div>
		</React.Fragment>
	);
}