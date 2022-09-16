import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	background-color: #07102C;
	margin: auto;
	max-width:  1320px;
	text-align: center;
	color: white;
	height: 403px;

.info{
	padding 150px;
}
`



const Footer = () => {
	return(
		<Wrapper>
			<div className='info'>
			<h1>Brian Oshinbolu</h1>
			<p><span><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt='linkedln-logo'/></span>
			<span><img src="https://img.icons8.com/sf-regular/48/000000/github.png" alt='github-logo'/></span></p>
			<p>Copyright 2022  |  All rights Reserved</p>
			</div>
		</Wrapper>

		);
}

export default Footer;