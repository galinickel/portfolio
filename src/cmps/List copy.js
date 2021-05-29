import React from 'react'
import Item from './Item'



const List = props=>{
    const {listToRender} = props
    return( 
        <div className="list">
            {listToRender.map(project=>{
            return <Item
            key={project}></Item>
            })}
        </div>
    )
}
export default List