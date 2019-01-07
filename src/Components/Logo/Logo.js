import React from 'react';
import Tilt from 'react-tilt';
import face from './face-logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="ma4 mt0 logo">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 50, width: 50 }} >
				<div className="Tilt-inner pa3"><img style={{paddingTop: '2px'}} src={face} alt='logo'/></div>
			</Tilt>
		</div>
	);
}

export default Logo;