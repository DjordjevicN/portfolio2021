import React, { useEffect, useRef } from 'react';
import Navigation from './Navigation'
import { singleProjectDisplay } from '../Animations'
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
function ProjectPlates() {

    let sectionOne = useRef(null)
    let sectionTwo = useRef(null)
    let sectionThree = useRef(null)
    let sectionFour = useRef(null)

    useEffect(() => {
        singleProjectDisplay(sectionOne, sectionTwo, sectionThree, sectionFour)
    }, []);
    return (
        <div className='projectZanatlije__wrapper'>
            <Navigation />
            <div className="projectZanatlije__content">
                <div className="projectZanatlije__title">

                </div>
                <div className="projectSectionIntroduction" ref={sectionOne}>
                    <div className="projectIntroduction">
                        <img className="projectIntroduction--image" src="/images/izgubljeneTablice.jpg" alt="" />
                        <div className="projectIntroduction--text">
                            <div className="projectLinkedTitle">
                                <a href="http://izgubljene-tablice.com/" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Izgubljene-tablice.com</h1></a>
                                <a href="http://izgubljene-tablice.com/" target="_blank" rel="noreferrer"> <GoLinkExternal /></a>
                            </div>
                            <p>The idea for this project was to make a service where you can report lost or found numberplates. When someone finds your numberplate, you get an e-mail notification and a GPS pin of the location.</p>

                            <p className="projectIntroduction--text--space">The design here needed to be very light, with no animations, because when you are looking for something you lost, you are in panic mode, and animations can be annoying in that situation.</p>
                            <p className="projectIntroduction--text--space">The idea here is to figure out how to work with Maps, automated email sending, handling images.</p>
                        </div>

                    </div>
                </div>

                <div className="projectSectionFrontend" ref={sectionTwo}>
                    <div className="projectFrontend">
                        <div className="projectFrontend--text">
                            <div className="projectLinkedTitle">
                                <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/frontend" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Frontend</h1></a>
                                <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/frontend" target="_blank" rel="noreferrer"> <FaGithub /></a>
                            </div>
                            <p>For this project i have used <span>React </span> for user interface,</p>
                            <p><span> Redux</span> (thunk) for state management,</p>
                            <p><span>Axios </span> to make HTTP requests,</p>
                            <p><span>Leaflet </span> to display map and pins.</p>

                        </div>
                        <img className="projectFrontend--image" src="/images/plateFront.jpg" alt="" />
                    </div>
                </div>

                <div className="projectSectionBackend" ref={sectionThree}>
                    <div className="projectBackend">
                        <img className="projectBackend--image" src="/images/plateBackend.jpg" alt="" />
                        <div className="projectBackend--text">
                            <div className="projectLinkedTitle">
                                <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/backend_new" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Backend</h1></a>
                                <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/backend_new" target="_blank" rel="noreferrer"> <FaGithub /></a>
                            </div>
                            <p>For this project I have used <span>ExpressJS</span>,</p>
                            <p><span>Bcrypt</span> to hash users password,</p>
                            <p><span>JsonWebToken</span>  to track logged in users and their permissions.</p>
                            <p><span>Express file uploader</span>  to handle image upload,</p>
                            <p><span>NodeMailer</span>  to handle emails</p>
                        </div>
                    </div>
                </div>
                <div className="projectSectionDatabase" ref={sectionFour}>
                    <div className="projectDatabase" >
                        <div className="projectDatabase--text">
                            <h1 className='projectDatabase--text--title'>Database</h1>
                            <p>For Database I have used MySQL</p>
                        </div>
                        <img className="projectDatabase--image" src="/images/tabliceDatabase.jpg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProjectPlates;
