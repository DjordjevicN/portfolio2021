import React from 'react';
import SocialIcons from './SocialIcons'
import NavigationItems from './NavigationItems'
import { Link } from 'react-router-dom'
function Navigation() {
    return (
        <div className="navigation__wrapper">
            <div className="navigation__content">
                <div className='navItems'>
                    <Link to='/'> <h2 className='logo'>N</h2></Link>
                    <NavigationItems />
                </div>
                <div className="contact">
                    <SocialIcons />
                    <a href="mailto:nikola.dj.87@gmail.com"><p>nikola.dj.87@gmail.com</p></a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
