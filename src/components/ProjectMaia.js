import React, { useEffect, useRef } from 'react';
import Navigation from './Navigation'
import { singleProjectDisplay } from '../Animations'
import { GoLinkExternal } from "react-icons/go";
function ProjectMaia() {
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
                <div className="projectSectionIntroduction" ref={sectionOne}>
                    <div className="projectIntroduction">
                        <img className="projectIntroduction--image" src="/images/maia.jpg" alt="" />
                        <div className="projectIntroduction--text">
                            <div className="projectLinkedTitle">
                                <a href="https://maia.rs/" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Maia.rs</h1></a>
                                <a href="https://maia.rs/" target="_blank" rel="noreferrer"> <GoLinkExternal /></a>
                            </div>
                            <p>The client needed eCommerce website to be designed and developed with instagram images to be displayed in website and to be multilingual.</p>
                            <p className="projectIntroduction--text--space">
                                For page builder I used Elementor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectMaia;
