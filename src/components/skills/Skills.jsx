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
				<progress id="file" value="89" max="100"> 89% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/html-5--v1.png"/>
			<div className='progress-info'>
				<p>HTML</p>
				<progress id="file" value="89" max="100"> 89% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/html-5--v1.png"/>
			<div className='progress-info'>
				<p>HTML</p>
				<progress id="file" value="89" max="100"> 89% </progress>
			</div>
		</div>
		<div className='skill-progress'>
			<img src="https://img.icons8.com/ios-filled/70/000000/html-5--v1.png"/>
			<div className='progress-info'>
				<p>HTML</p>
				<progress id="file" value="89" max="100"> 89% </progress>
			</div>
		</div>

		</div>
		</div>
		</React.Fragment>
	);
}