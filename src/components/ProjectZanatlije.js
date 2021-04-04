import React, { useEffect, useRef } from 'react';
import Navigation from './Navigation'
import { singleProjectDisplay } from '../Animations'
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
function ProjectZanatlije() {

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
                        <img className="projectIntroduction--image" src="/images/zanatlijeLanding.jpg" alt="" />
                        <div className="projectIntroduction--text">
                            <div className="projectLinkedTitle">
                                <a href="http://zanatlije.rs/" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Zanatlije.rs</h1></a>
                                <a href="http://zanatlije.rs/" target="_blank" rel="noreferrer"> <GoLinkExternal /></a>
                            </div>
                            <p>The idea was to make a marketplace that matches freelancers with local demand, allowing consumers to find immediate help with every day tasks.</p>

                            <p className="projectIntroduction--text--space">This project was a major learning experience where i have stepped into problems with database structure, deploying full stack project, cPannel and dealing with backend connections.
                            But also opend my eye to new posibitities.</p>
                        </div>

                    </div>
                </div>

                <div className="projectSectionFrontend" ref={sectionTwo}>
                    <div className="projectFrontend">
                        <div className="projectFrontend--text">
                            <div className="projectLinkedTitle">
                                <a href="https://github.com/DjordjevicN/Zanatlije-frontend" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Frontend</h1></a>
                                <a href="https://github.com/DjordjevicN/Zanatlije-frontend" target="_blank" rel="noreferrer"> <FaGithub /></a>
                            </div>
                            <p>For this project i have used
                             <span> React</span> for user interface,</p>
                            <p><span> Redux</span> (thunk) for state management,</p>
                            <p><span> Formik</span> and <span> Yup</span> for form validation,</p>
                            <p><span> Axios</span> to make HTTP requests,</p>
                            <p><span> GSAP</span> for animations.</p>
                            <p>Currently I am implementing <span> CKEditor</span> so when user type their project description the text can be formatted,
                            and <span>Gravatar</span> so that users profile picture can be pulled from thair email profile.</p>

                        </div>
                        <img className="projectFrontend--image" src="/images/zanatlijeFrontend.jpg" alt="" />
                    </div>
                </div>

                <div className="projectSectionBackend" ref={sectionThree}>
                    <div className="projectBackend">
                        <img className="projectBackend--image" src="/images/zanatlijeBackend.jpg" alt="" />
                        <div className="projectBackend--text">
                            <div className="projectLinkedTitle">
                                <a href="https://github.com/DjordjevicN/Zanatlije-Backend" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Backend</h1></a>
                                <a href="https://github.com/DjordjevicN/Zanatlije-Backend" target="_blank" rel="noreferrer"> <FaGithub /></a>
                            </div>

                            <p>For this project I have used <span>ExpressJS</span>,</p>
                            <p><span>Bcrypt</span> to hash users password,</p>
                            <p><span>JsonWebToken</span>  to track logged in users and their permissions.</p>
                        </div>

                    </div>
                </div>
                <div className="projectSectionDatabase" ref={sectionFour}>
                    <div className="projectDatabase" >
                        <div className="projectDatabase--text">
                            <h1 className='projectDatabase--text--title'>Database</h1>
                            <p>For Database I have used MySQL</p>
                            <p>Linking everything to the user </p>
                        </div>
                        <img className="projectDatabase--image" src="/images/zanatlijeDatabase.jpg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProjectZanatlije;
