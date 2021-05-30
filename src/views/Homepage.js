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
        elevation: 4,
        title: 'Trellworks - Vue Based Trello Clone',
        secondaryTitle: 'Manage your team in a highly customizable environment.',
        description: 'Trellworks was built in Vue, utilizing the powerful Vuex library for state management as well as a Node-JS backend, complete with sockets to support real-time push notifications and updates.',
        link: 'https://serene-hamlet-54538.herokuapp.com/',
        github: 'https://github.com/Almoglem/trellworks-front',
        extendedDescription: 'Among its features, Trellworks utilizes dynamic components, drag & drop elements, web sockets and push notifications. Also found on Trellworks are features extending the original; a highly informative dashboard, allowing us to keep track of the tasks and the users working on the board, and the utilization of canvas to support scribbling notes as well as writing on top of existing images.'
    }]

    const secondaryList = [{
        img: '/images/appsus.png',
        elevation: 2,
        title: 'Appsus - Vue based Mail & Notes App',
        secondaryTitle: 'Keep track of your notes and Emails, all in one place.',
        description: 'Appsus is a Vue-js based clone of both Gmail and Google Keep, built in Vue-js without additional libraries.',
        link: 'https://galinickel.github.io/appsus/',
        github: 'https://github.com/galinickel/appsus',
        extendedDescription: ''
    },
    {
        img: '/images/memegenerator.png',
        elevation: 1,
        title: 'Vanilla JS Based Meme Generator',
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

                <wired-divider class="divider"/>
                <List listToRender={list} />
                <p>Wanna see more projects? They're all right here!</p>
                <wired-button class={showList ? 'highlight-button' : 'highlight-button animated'} onClick={() => toggleList(!showList)}>
                    {showList ? 'see less' : 'show me more'}</wired-button>
            <wired-divider class="divider"/>
            </div>

            <Fade top when={showList}>
                {showList && <List listToRender={secondaryList} />}
            </Fade>

            <div ref={aboutRef}>  <About /></div>

        </>
    )
}
export default Homepage