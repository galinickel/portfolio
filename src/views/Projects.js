import React from 'react'
import List from '../cmps/List'
import About from '../cmps/About'


const Projects = props => {
    const renderList = [1, 2, 3, 4, 5, 6]
    return (
        <div className="projects">
            <div className="list-container">
                <List listToRender={renderList} />
            </div>
            <About/>
        </div>
    )
}
export default Projects