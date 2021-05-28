import React from 'react'
import List from './List'



const Projects = props=>{
    const renderList = [1,2,3,4,5,6]
    return( 
        <div className="projects">
<List listToRender={renderList}/>
        </div>
    )
}
export default Projects