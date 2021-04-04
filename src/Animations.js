
import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export const displayLandingPage = (myName, aboutMe, homeButton, sidebarText) => {
    let homeTL = new TimelineLite()
    homeTL
        .from(sidebarText.current, {
            y: 100,
            opacity: 0
        }).from(myName.current, {
            duration: .3,
            y: 100,
            opacity: 0
        }).from(aboutMe.current, {
            duration: .3,
            y: 100,
            opacity: 0
        })
        .from(homeButton.current, {
            duration: .3,
            y: 100,
            opacity: 0
        })

}
export const removeLandingPage = (myName, aboutMe, homeButton, sidebarText, setRedirect) => {
    let homeOutTL = new TimelineLite()
    homeOutTL.to(myName.current, {
        y: -100,
        opacity: 0
    }, .3)
        .to(aboutMe.current, {
            x: -100,
            opacity: 0
        }, .3)
        .to(homeButton.current, {
            y: 20,
            opacity: 0
        }, .3)
        .to(sidebarText.current, {
            y: -100,
            opacity: 0
        })
        .add(function () {
            setRedirect(true)
        })
}

export const displayStack = (icons, stackText, sidebarTextStack, setRenderfix) => {
    let stackTL = new TimelineLite()
    stackTL.add(function () {
        setRenderfix(true)
    }).from(sidebarTextStack.current, {
        y: -50,
        opacity: 0
    })
        .from(icons.current, {
            y: -50,
            opacity: 0
        })
        .from(stackText.current, {
            y: -50,
            opacity: 0
        })
}
export const stackOut = (icons, stackText, sidebarTextStack, setRedirect) => {
    let stackOutTL = new TimelineLite()
    stackOutTL.to(sidebarTextStack.current, {
        y: -100,
        opacity: 0,
        duration: .3
    })
        .to(icons.current, {
            y: -100,
            opacity: 0,
            duration: .3
        }, .3)
        .to(stackText.current, {
            y: -100,
            opacity: 0,
            duration: .3
        }, .6).add(function () {
            setRedirect(true)
        })
}
export const displayProjects = (sidebarTextStack, projectMenu, projectDisplay, setRenderfix) => {
    let projectsDisplayTL = new TimelineLite()
    projectsDisplayTL.add(function () {
        setRenderfix(true)
    }).from(sidebarTextStack.current, {
        y: -10
    }, .3)
        .from(sidebarTextStack.current, {
            y: -50,
            opacity: 0,
            duration: .3
        }, .3)
        .from(projectMenu.current, {
            y: -50,
            opacity: 0,
            duration: .3
        }, .6)
        .from(projectDisplay.current, {
            y: -50,
            opacity: 0,
            duration: .3
        }, .9)
}

export const singleProjectDisplay = (sectionOne, sectionTwo, sectionThree, sectionFour) => {
    gsap.fromTo(sectionOne.current, {
        autoAlpha: 0
    }, {
        duration: .3,
        autoAlpha: 1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
            id: 1,
            trigger: sectionOne.current,
            start: 'top +=1000',
            end: "+=500",
            toggleActions: 'play none none reverse',
            // markers: true
        }
    })

    gsap.fromTo(sectionTwo.current, {
        autoAlpha: 0
    }, {
        duration: .3,
        autoAlpha: 1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
            id: 1,
            trigger: sectionTwo.current,
            start: 'top +=600',
            end: "+=500",
            toggleActions: 'play none none reverse',
            // markers: true
        }
    })

    gsap.fromTo(sectionThree.current, {
        autoAlpha: 0
    }, {
        duration: .3,
        autoAlpha: 1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
            id: 1,
            trigger: sectionThree.current,
            start: 'top +=600',
            end: "+=500",
            toggleActions: 'play none none reverse',
            // markers: true
        }
    })

    gsap.fromTo(sectionFour.current, {
        autoAlpha: 0
    }, {
        duration: .3,
        autoAlpha: 1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
            id: 1,
            trigger: sectionFour.current,
            start: 'top +=700',
            end: "+=500",
            toggleActions: 'play none none reverse',
            // markers: true
        }
    })

}