import React from 'react';
import './contactme.css'



export default function ContactMe(){
	return (
		<React.Fragment>
		<div className='wrapper' id='contactme'>
		<div className='get_in_touch'>
			<h1>Get In Touch</h1>
			<p><img src="https://img.icons8.com/color/50/000000/apple-mail.png"/>oshinbolubrian@gmail.com</p>
			<p><img src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"/>+234-810-027-1832</p>
			<span><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt='linkedln-logo'/></span>
			<span><img src="https://img.icons8.com/sf-regular/48/000000/github.png" alt='github-logo'/></span>
		</div>
		<div className='sendmsg'>
			<h3>Need a Service?</h3>
			<h1>Send A Message</h1>
			<form className='data'>
				<input type="etext" id="name" name="name" placeholder='Enter Full Name' /> 
				<input type="email" id="email" name="email" placeholder='Enter Full Name'/> 
				<textarea row='4' cols='50' id="msg" name="msg" placeholder='Write A Message'/> 
				<button className='button'>Send Message</button>
			</form>
		</div>
		</div>
		</React.Fragment>
		);
}
