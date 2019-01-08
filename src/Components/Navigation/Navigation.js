import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn) {
		return (
			<nav>
				<span><p onClick={() => onRouteChange('signout')} className='f3 link dim black pa1 pointer'>Sign Out</p></span>
			</nav>
		);
		} else {
			return(
				<nav>
					<span><p onClick={() => onRouteChange('SignIn')} className='f3 link dim black pa1 pointer'>Sign In</p></span>
					<span><p onClick={() => onRouteChange('Register')} className='f3 link dim black pa1 pointer'>Register</p></span>
				</nav>
			);
		}	
}

export default Navigation;