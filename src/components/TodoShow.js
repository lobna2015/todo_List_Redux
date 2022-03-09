import React from 'react'
import { useDispatch} from 'react-redux'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoShow = () => {

    const dispatch= useDispatch();
    const [task, setTask] = useState('')

   
   
  return (

    <div>
<br/>
  <hr/> 
  <h2>JUST DO IT</h2> 
  <hr/>

<input type="text"  placeholder="Add a task..." style={{width:'45%',height:'30px'}} onChange={ (e)=> setTask(e.target.value) } />  
<br/>
<button onClick={ ()=> dispatch( {type: 'ADD_TASK', payload : {task,isDone:false,id:uuidv4()}} ) }  style={{width:'10%',height:'30px'}}>add</button> <hr/>

    </div>
  )
}

export default TodoShow