import React, { useEffect, useState, useRef } from 'react';
import Navigation from './Navigation'
import { BsArrowRight } from "react-icons/bs";
import { displayLandingPage, removeLandingPage } from '../Animations'
import { Redirect } from 'react-router-dom'

function HomePage() {
    const [redirect, setRedirect] = useState(false);

    let myName = useRef(null)
    let aboutMe = useRef(null)
    let homeButton = useRef(null)
    let sidebarText = useRef(null)

    useEffect(() => {
        displayLandingPage(myName, aboutMe, homeButton, sidebarText)
    }, []);
    if (redirect) {
        return <Redirect to='/stack' />
    }
    return (
        <div className="home__wrapper" >
            <Navigation />
            <div className="home__content">
                <div className="sideBar" >
                    <p ref={sidebarText}>PORTFOLIO</p>
                </div>
                <div className="home__information">
                    <div>
                        <div className="home__name" ref={myName}>
                            <h1>NIKOLA ĐORĐEVIĆ</h1>
                        </div>
                        <div className="home__aboutMe" ref={aboutMe}>
                            <p>I am a <span>Front-end web developer</span> with a passion for programming as well as a creative eye and a pragmatic mind. I love learning about new things and implementing them into my work</p>
                        </div>
                        <div ref={homeButton} className='home_action'>
                            <p>see my favorite stack </p>
                            <BsArrowRight className="home__btn" onClick={() => {
                                removeLandingPage(myName, aboutMe, homeButton, sidebarText, setRedirect)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
