import React, { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation'
import { projectData } from '../ProjectsData'
import { BsArrowRight } from "react-icons/bs";
import { Redirect } from 'react-router-dom'
import { displayProjects } from '../Animations'


function Projects() {
    const [redirect, setRedirect] = useState(false);
    const [url, setUrl] = useState('');
    const [renderFix, setRenderfix] = useState(false);
    const [projectToDisplay, setProjectToDisplay] = useState(1);
    let displayProject = projectData.find((item) => item.id === projectToDisplay);

    let sidebarTextStack = useRef(null)
    let projectMenu = useRef(null)
    let projectDisplay = useRef(null)


    useEffect(() => {
        displayProjects(sidebarTextStack, projectMenu, projectDisplay, setRenderfix)
    }, []);

    if (redirect) {
        return <Redirect to={url} />
    }
    return (
        <div className='project__wrapper'>
            <Navigation />
            <div className="project__content">
                <div className="sideBar--stack" ref={sidebarTextStack}>
                    {renderFix ? <p >PROJECTS</p> : null}
                </div>
                <div className="project__section" ref={projectMenu}>
                    {renderFix ? <div className='projects__list' >
                        <div className='projects__list--item' onClick={() => {
                            setProjectToDisplay(1)
                        }}>
                            <p>ZANATLIJE.RS</p>
                        </div>
                        <div className='projects__list--item' onClick={() => {
                            setProjectToDisplay(2)
                        }}>
                            <p>IZGUBLJENE-TABLICE.COM</p>
                        </div>
                        <div className='projects__list--item' onClick={() => {
                            setProjectToDisplay(3)
                        }}>
                            <p>MAIA.RS</p>
                        </div>
                    </div> : null}
                    <div className='displayProject__wrapper' ref={projectDisplay}>
                        {renderFix ? <div className="displayProject__content">
                            <div className="sectionLinkedTitle"></div>
                            <h1 className='previewTitle' >{displayProject.title}</h1>
                            <div>
                                <img className='previewImage' src={displayProject.image} alt="" />
                            </div>
                            <div className='previewBody'>
                                <p >{displayProject.body}</p>
                            </div>
                            <div className='project_action--more' >
                                <p>read more</p>
                                <BsArrowRight className="stack__btn" onClick={() => {
                                    setUrl(displayProject.url)
                                    setRedirect(true)
                                }} />
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Projects;
