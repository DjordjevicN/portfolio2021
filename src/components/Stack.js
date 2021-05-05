import React, { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation'
import { Redirect } from 'react-router-dom'
import { displayStack } from '../Animations'
import { BsArrowRight } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import { SiReact, SiFigma, SiCss3, SiRedux, SiNodeDotJs, SiMysql, SiJavascript, SiAdobeillustrator, SiGreensock } from "react-icons/si";
import { stackOut } from '../Animations'

function Stack() {
    const [redirect, setRedirect] = useState(false);
    const [renderFix, setRenderfix] = useState(false);
    let icons = useRef(null)
    let stackText = useRef(null)
    let sidebarTextStack = useRef(null)
    useEffect(() => {
        displayStack(icons, stackText, sidebarTextStack, setRenderfix)
    }, []);

    if (redirect) {
        return <Redirect to='/projects' />
    }
    return (
        <div className='stack__wrapper'>
            <Navigation />
            <div className="stack__content">
                <div className="sideBar--stack" ref={sidebarTextStack}>
                    {renderFix ? <p>STACK</p> : null}
                </div>
                <div className="stack__section">
                    <div className="stack__information--split">
                        <div className="stack__icons__wrapper" ref={icons}>
                            {renderFix ? <div>
                                <div className="iconElBlock">
                                    <SiFigma className="iconEl" />
                                    <SiAdobeillustrator className="iconEl" />
                                </div>
                                <div className="iconElBlock">
                                    <DiHtml5 className="iconEl" />
                                    <SiCss3 className="iconEl" />
                                    <SiGreensock className="iconEl" />
                                </div>
                                <div className="iconElBlock">
                                    <SiJavascript className="iconEl" />
                                    <SiReact className="iconEl" />
                                    <SiRedux className="iconEl" />
                                </div>
                                <div className="iconElBlock">
                                    <SiNodeDotJs className="iconEl" />
                                    <SiMysql className="iconEl" />
                                </div>
                                <div className='stack_action'>
                                    <p>see my projects </p>
                                    <BsArrowRight className="stack__btn" onClick={() => {
                                        stackOut(icons, stackText, sidebarTextStack, setRedirect)

                                    }} />
                                </div>
                            </div> : null}
                        </div>
                        <div ref={stackText} className="stack__information">
                            {renderFix ? <div >
                                <p>My process usually begins with pen and paper, but right after that - I use <span>Figma</span>, perfect for designing and prototyping. If I need a custom element, then I’ll choose to design it in Illustrator.</p>
                                <p>When it comes to page styling, I like to use CSS if it’s a small project, or <span>SASS</span>  when it’s a large one.</p>
                                <p>Animations are usually done in <span>Framer Motion</span>  since it is compatible with React, but I find myself using <span>GSAP</span> more and more.</p>
                                <p><span>React</span> is my <span>JavaScript</span> library of choice and I use Redux for state management.</p>
                                <p>Since I use JavaScript it is natural that I am going to use it on the backend with <span>NodeJS</span>.</p>
                                <p>For database I use depends on the project, but it is usually <span>MySQL</span>.</p>
                            </div>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;
