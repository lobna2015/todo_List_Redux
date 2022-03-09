
import './App.css';
import TodoShow from './components/TodoShow'
import TaskList from './components/TaskList'
function App() {

  return (
   
    <div className="App">
    <TodoShow />
    <TaskList show={false}/>
    </div>
  );
}

export default App;
