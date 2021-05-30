import { React, useState, useRef } from 'react'
import Fade from 'react-reveal/Fade';

import About from '../cmps/About'
import List from '../cmps/List'

const Homepage = () => {
    const [showList, toggleList] = useState(false)
    const projectsRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const githubIcon = <svg xmlns="http://www.w3.org/2000/svg" fill=" #ffefd1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" fill=" #ffefd1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" /></svg>
    const linkedInIcon = <svg xmlns="http://www.w3.org/2000/svg" fill=" #ffefd1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
    const cvIcon = <svg width="24" height="24"  fill=" #ffefd1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg>
    const list = [{
        img: 'images/trellworks.webp',
        elevation: 4,
        title: 'Trellworks - Vue Based Trello Clone',
        secondaryTitle: 'Manage your team in a highly customizable environment.',
        description: 'Trellworks was built in Vue, utilizing the powerful Vuex library for state management as well as a Node-JS backend, complete with sockets to support real-time push notifications and updates.',
        link: 'https://serene-hamlet-54538.herokuapp.com/',
        github: 'https://github.com/Almoglem/trellworks-front',
        extendedDescription: 'Among its features, Trellworks utilizes dynamic components, drag & drop elements, web sockets and push notifications. Also found on Trellworks are features extending the original; a highly informative dashboard, allowing us to keep track of the tasks and the users working on the board, and the utilization of canvas to support scribbling notes as well as writing on top of existing images.'
    }]

    const secondaryList = [{
        img: 'images/appsus.png',
        elevation: 2,
        title: 'Appsus - Vue based Mail & Notes App',
        secondaryTitle: 'Keep track of your notes and Emails, all in one place.',
        description: 'Appsus is a Vue-js based clone of both Gmail and Google Keep, built in Vue-js without additional libraries.',
        link: 'https://galinickel.github.io/appsus/',
        github: 'https://github.com/galinickel/appsus',
        extendedDescription: 'Appsus Keep is a Google Keep clone, featuring dynamic component rendering to support notes of text, image, video and list nature. Appsus Mail is a Gmail clone, supporting saving an email to the Keep app and vice versa.'
    },
    {
        img: 'images/memegenerator.png',
        elevation: 1,
        title: 'Vanilla JS Based Meme Generator',
        secondaryTitle: 'Make memes and start your very own meme gallery.',
        description: 'Meme Generator was built individually using vanilla javascript and canvas, without the use of external libraries.',
        link: 'https://galinickel.github.io/meme-generator-gali/',
        github: 'https://github.com/galinickel/meme-generator-gali',
        extendedDescription:'Among its features are Canvas, drag & drop, mobile and browser touch events. Create and manage your own personalized meme gallery or download your memes to your computer.'
    },
    {
        img: 'images/weather.png',
        elevation: 3,
        title: 'Weather-Buddy',
        secondaryTitle: 'Check the forecast - anywhere on the globe.',
        description: 'Weather-Buddy is a React based web app where you can get real-time updates on the forecast anywhere in the world - and keep track of your favorite locations.',
        link: 'https://galinickel.github.io/Gali-Nickel-20-05-2021/#/',
        github: 'https://github.com/galinickel/Gali-Nickel-20-05-2021',
        extendedDescription:'Weather-Buddy sports a responsive design complete with day and night modes, state management and the ability to manage your own favorite cities list - and check on their 5-day forecast whenever you like.'
    },
    {
        img: 'images/minesweeper.png',
        elevation: 2,
        title: 'Minesweeper',
        secondaryTitle: 'The classic game brought to life with a handful of refreshing options, written in Vanilla Javascript.',
        description: 'Trellworks was built in Vue, utilizing the powerful Vuex library for state management.',
        link: 'https://galinickel.github.io/sprint1/',
        github: 'https://github.com/galinickel/sprint1',
        extendedDescription:'This rendition of the cult classic features three difficulty levels, a lives system, a hint system and a safe-click system, giving you the opportunity to ascend your experience to new heights. '
    }]

    return (
        <>
            <div className="header">
                <Fade left><section className="introduction">
                    <h1>Gali Nickel</h1>
                    <h2>Fullstack Developer</h2>
                    <wired-card class="cta-bar " horizontal elevation={2}>
                        <span onClick={() => { aboutRef.current.scrollIntoView() }}>Get to know me</span>
                        <span onClick={() => { projectsRef.current.scrollIntoView() }}>Projects</span>
                        <span onClick={() => { contactRef.current.scrollIntoView() }}>Contact</span>
                    </wired-card>
                </section>
                </Fade>
            </div>
            <div ref={projectsRef} className="project-highlight">
                <h1>Project Highlight</h1>
                <p className="highlight-intro">I'm always working on something new and exploring new directions. This project is real special to me; it was built in a great team of three, in just under three weeks. When working in a team, I love assuming the role of an innovator- implementing new systems from the grounds up and exploring new technologies and libraries.</p>
                <wired-divider class="divider" />
                <List listToRender={list} />
                <wired-divider class="divider" />

                <p>Wanna see more projects? They're all right here!</p>
                <wired-button class={showList ? 'highlight-button' : 'highlight-button animated'} onClick={() => toggleList(!showList)}>
                    {showList ? 'see less' : 'show me more'}</wired-button>
                <wired-divider class="divider" />
            </div>
            <Fade top when={showList}>
                {showList && <List listToRender={secondaryList} />}
            </Fade>
            <div ref={aboutRef}>  <About /></div>
            <div ref={contactRef}>
            <section className="links-card">
                    <section className="flex">
                        <p>
                            Let's Keep in Touch!
                            </p>
                        <section>
                            <wired-icon-button onClick={()=>{window.open('mailto:'+'gali.nickel95@gmail.com','_self')}}>{emailIcon} </wired-icon-button>
                            <wired-icon-button onClick={()=>{window.open("https://github.com/galinickel")}}>{githubIcon}</wired-icon-button>
                            <wired-icon-button onClick={()=>{window.open("https://www.linkedin.com/in/gali-nickel-b37b0020a/")}}>{linkedInIcon}</wired-icon-button>
                            <wired-icon-button onClick={()=>{window.location.assign('https://drive.google.com/uc?export=download&id=1wSwt5R6bZRcm9CgBXvUrUCpOy-VYgJ_r')}}>{cvIcon}</wired-icon-button>

                        </section>
                        </section>
                </section>
            </div>
        </>
    )
}
export default Homepage