import React from 'react'
import Header from '../cmps/Header'
import About from '../cmps/About'
import List from '../cmps/List'

const Homepage = () => {

    return (
        <>
            <Header />
            <div>
                <h1>Project Highlight</h1>
                <p>You can view the full portfolio on my "Projects" page!</p>
            </div>
            <List listToRender={[1]} />
            <About />
        </>
    )
}
export default Homepage