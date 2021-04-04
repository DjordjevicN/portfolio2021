import React from 'react';
import { Link } from 'react-router-dom'
function NavigationItems() {
    return (
        <div className="navigationItems__wrapper">
            <Link className="link navItem" to='/'><p>HOME</p></Link>
            <Link className="link navItem" to='/stack'><p>STACK</p></Link>
            <Link className="link navItem" to='/projects'><p>PROJECTS</p></Link>
        </div>
    );
}

export default NavigationItems;
