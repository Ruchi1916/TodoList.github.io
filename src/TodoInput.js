import React, { useState } from 'react'

function TodoInput(props) {
    const [todoText, setTodoText] = useState('');
    
    const handleEnter = (e) => {
        if(e.keyCode === 13){
            props.addList(todoText)
            setTodoText("")    
        }
    }
  return (
    <div className='input-container'>
        <input type="text" className='input-box' placeholder='Enter your Task' value={todoText} 
        onChange={e=>{setTodoText(e.target.value)}}
        onKeyDown = {handleEnter}
        />
        <button className='btn' onClick={(e)=>{props.addList(todoText)
            setTodoText("")}}>+</button>
    </div>
  )
}
  
export default TodoInput
