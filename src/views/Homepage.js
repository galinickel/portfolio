import { React, useState, useRef } from 'react'
import Fade from 'react-reveal/Fade';

import About from '../cmps/About'
import List from '../cmps/List'

const Homepage = () => {
    const [showList, toggleList] = useState(false)
    const projectsRef = useRef(null)
    const aboutRef = useRef(null)

    const list = [{
        img: '/images/trellworks.webp',
        title: 'Trellworks - Vue Based Trello Clone',
        secondaryTitle: 'Manage your team in a highly customizable environment.',
        description: 'Trellworks was built in Vue, utilizing the powerful Vuex library for state management.',
        link: '',
        github: ''
    }]

    const secondaryList = [{
        img: '/images/appsus.png',
        title: 'Trellworks - Vue Based Trello Clone',
        secondaryTitle: 'Manage your team in a highly customizable environment.',
        description: 'Trellworks was built in Vue, utilizing the powerful Vuex library for state management.',
        link: '',
        github: ''
    },
    {
        img: '/images/memegenerator.png',
        title: 'Trellworks - Vue Based Trello Clone',
        secondaryTitle: 'Manage your team in a highly customizable environment.',
        description: 'Trellworks was built in Vue, utilizing the powerful Vuex library for state management.',
        link: '',
        github: ''
    }]

    return (
        <>
            <div className="header">
                <Fade left><section className="introduction">
                    <h1>Gali Nickel</h1>
                    <h2>Fullstack Developer</h2>
                        <wired-card class="cta-bar" horizontal elevation={2}>
                            <span onClick={() => { aboutRef.current.scrollIntoView() }}>Get to know me</span>
                            <span onClick={() => { projectsRef.current.scrollIntoView() }}>Projects</span>
                            <span>Contact</span>
                        </wired-card>
                </section>
                </Fade>
            </div>
            <div ref={projectsRef} className="project-highlight">
                <h1>Project Highlight</h1>
                <List listToRender={list} />
                <p>Wanna see more projects? They're all right here!</p>
                <wired-button onClick={() => toggleList(!showList)}>
                    Click Click!</wired-button>
            </div>
            <Fade top when={showList}>
                {showList && <List listToRender={secondaryList} />}
            </Fade>
            <div ref={aboutRef}>  <About /></div>

        </>
    )
}
export default Homepage