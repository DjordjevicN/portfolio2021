import React from 'react';
import Navigation from './Navigation'
import { FaGithub } from "react-icons/fa";
function WeekendProjects() {
    return (
        <div className="weekendProjects__wrapper">
            <Navigation />
            <div className='weekendProjects__content'>
                <h1>WEEKEND PROJECTS</h1>

                <div className="weekendSplit">
                    <img className='weekendProject__image' src="/images/paralax-red-mountin.jpg" alt="" />
                    <div className="textAction">
                        <h3>Parallax mountain</h3>
                        <p>Found this project idea on pinterest and had to replicate it</p>
                        <button className='button'><a href="https://github.com/DjordjevicN/PurpleMountainParalax" target="_blank" rel="noreferrer">Github</a></button>
                        <button className='button'><a href="http://parallaxredmountain.nikola-djordjevic.com/" target="_blank" rel="noreferrer">Visit</a></button>
                    </div>
                </div>



                <div>paralax purple mountin</div>
                <div>paralax natural</div>
                <div>cyberpunk portfolio</div>
                <div>ecommerce</div>
                <div>digital</div>
                <div>belgrade galery</div>
                <div>purple portfolio</div>
                <div>memory card</div>
                <div>rave</div>
                <div>cybp</div>
                <div>loto</div>
                <div>movie</div>
                <div>piza</div>
                <div>whatsup mockup</div>
            </div>
        </div>

    );
}

export default WeekendProjects;
