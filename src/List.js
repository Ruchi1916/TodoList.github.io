 import React from 'react'
 
 function List(props) {
   return (
     <li className="list-items">
        {props.item}
        <span className='icons'>
            <i className ="fa-solid fa-trash-can icon-delete" onClick={e=>{
                props.deleteTaskList(props.index)
            }}></i>
        </span>
         </li>
   )
 }
 
 export default List
 