import React from 'react'
import Item from './Item'



const List = props=>{
    const {listToRender} = props
    return( 
        <div className="list-block">
            {listToRender.map(project=>{
            return <Item
            key={project}
            project={project}></Item>
            })}
        </div>
    )
}
export default List