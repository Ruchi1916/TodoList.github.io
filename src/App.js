
import { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import List from './List';


function App() { 
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoText) => {
    if(todoText!=="") 
    setTodoList([...todoList,todoText]);
  }
  const deleteTask = (key)=> {
    let newListTask = [...todoList];
    newListTask.splice(key,1)
    setTodoList([...newListTask])
  }
  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className='main-heading'>ToDo List</h1>
      <br/>
    <TodoInput addList={addTodo}/>
    <h1 className="app-heading">TODO</h1>
    <hr/>
    {todoList.map((listItems,i)=>{
      return (
        <List key={i} index={i} item={listItems} deleteTaskList = {deleteTask}/>
      )
    })}
      </div>
    </div>
  );
}

export default App;
