import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'


const TaskList = ({show}) => {
const [x, setX] = useState(show)
const [y, setY] = useState('')

    const input = useSelector(state=> state.reducer.input);
    const filter = useSelector(state => state.reducer.filter)
    const dispatch = useDispatch();
    const disp=(id)=> {
      dispatch( {type:'DONE', payload:id }) 

    }
    const disp2=(id)=> {
      dispatch( {type:'DELETE', payload:id} ) 

    }
    const handleInput = (e) => { 
e.preventDefault()
       dispatch( {type: 'UPDATE', payload: y})
     }

  return (
    <div>

<form>
  <select onChange={ (e)=> dispatch( {type: 'FILTER', payload:e.target.value})} style={{width:'25%',height:'30px'}}>

  <option value="all">all</option>
  <option value="done">done</option>
  <option value="undone">undone</option>

  </select>

  
</form>

<div>
{input.filter(fil => ( filter === 'all' ? true : filter === 'done' ?  fil.isDone === true  :  filter === 'undone' ?  fil.isDone === false : false )).map(el =>(

    <>
  
   {el.isDone === false ?<h3 >{el.task}</h3> : <h3 style={{textDecorationLine: 'line-through' }}>{el.task}</h3>}

<button onClick={ ()=> disp(el.id)}>Done</button>
<button onClick={()=> disp2(el.id)}>Delete</button>
<button  onClick={ ()=>setX(true)}>update</button>
<>{x && <input type="text" onChange={(e)=>setY(e.target.value)}>
<button onClick={handleInput}>up</button>
 </input>}</>
</>
    ))}</div>

    </div>
  )
}

export default TaskList