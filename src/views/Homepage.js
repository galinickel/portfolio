import { React, useState } from 'react'
import Fade from 'react-reveal/Fade';

// import {Link} from 'react-router-dom'
import Header from '../cmps/Header'
import About from '../cmps/About'
import List from '../cmps/List'

const Homepage = () => {
    const [showList, toggleList] = useState(false)

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
            <Header />
            <div className="project-highlight">
                <h1>Project Highlight</h1>
                <List listToRender={list} />
                <p>Wanna see more projects? They're all right here!</p>
                <wired-button onClick={()=>toggleList(!showList)}>
                    Click Click!</wired-button>
            </div>
            <Fade top when={showList}>
            {showList && <List listToRender={secondaryList} />}         
            </Fade>
            <About />
        </>
    )
}
export default Homepage