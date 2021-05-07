import React from 'react';
import Navigation from './Navigation'

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
                        <p>Parallax effect with Javascript</p>
                        <button className='button'><a href="https://github.com/DjordjevicN/PurpleMountainParalax" target="_blank" rel="noreferrer">Github</a></button>
                        <button className='button'><a href="http://parallaxredmountain.nikola-djordjevic.com/" target="_blank" rel="noreferrer">Visit</a></button>
                    </div>
                </div>

                <div className="weekendSplit">
                    <img className='weekendProject__image' src="/images/cyberpunk.jpg" alt="" />
                    <div className="textAction">
                        <h3>Portfolio 2020</h3>
                        <p>This project is second attempt to make my portfolio. I wanted to make it to be like cyberpunk theme</p>

                        <button className='button'><a href="https://github.com/DjordjevicN/Cyberpunk_portfolio_2020" target="_blank" rel="noreferrer">Github</a></button>

                        <button className='button'><a href="http://nikola-djordjevic.com/" target="_blank" rel="noreferrer">Visit</a></button>


                    </div>
                </div>

                <div className="weekendSplit">
                    <img className='weekendProject__image' src="/images/parallax-nature.jpg" alt="" />
                    <div className="textAction">
                        <h3>Parallax Explore</h3>
                        <p>Found this project idea on dribbble and had to replicate it</p>
                        <p>Parallax effect with GSAP</p>
                        <button className='button'><a href="https://github.com/DjordjevicN/PurpleMountainParalax" target="_blank" rel="noreferrer">Github</a></button>

                        <button className='button'><a href="http://parallaxnature.nikola-djordjevic.com/" target="_blank" rel="noreferrer">Visit</a></button>

                        <button className='button'><a href="https://dribbble.com/shots/5885777-Herschel-Destination-Unknown" target="_blank" rel="noreferrer">Idea</a></button>
                    </div>
                </div>

                <div className="weekendSplit">
                    <img className='weekendProject__image' src="/images/rave-party.jpg" alt="" />
                    <div className="textAction">
                        <h3>One minute rave</h3>
                        <p>This was just an idea that was fun at the time </p>

                        <button className='button'><a href="https://github.com/DjordjevicN/Rave-event-frontend" target="_blank" rel="noreferrer">Github</a></button>

                        <button className='disabled'>Visit</button>
                    </div>
                </div>

                <div className="weekendSplit">
                    <img className='weekendProject__image' src="/images/cybp.jpg" alt="" />
                    <div className="textAction">
                        <h3>Portfolio 2019</h3>
                        <p>This project is first attempt to make my portfolio. I wanted to make it to be like cyberpunk theme</p>

                        <button className='button'><a href="https://github.com/DjordjevicN/Djordjevic-Nikola-Portfolio-CYBP" target="_blank" rel="noreferrer">Github</a></button>

                        <button className='disabled'>Visit</button>
                    </div>
                </div>

                <div className="weekendSplit">
                    <img className='weekendProject__image' src="/images/movie.jpg" alt="" />
                    <div className="textAction">
                        <h3>Movie Review</h3>
                        {/* <p>This project is first attempt to make my portfolio. I wanted to make it to be like cyberpunk theme</p> */}

                        <button className='button'><a href="https://github.com/DjordjevicN/Movie-Search-API-" target="_blank" rel="noreferrer">Github</a></button>

                        <button className='disabled'>Visit</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default WeekendProjects;
