import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddToDo from './components/AddToDo'
import TaskList from './components/TaskList'

function App() {
  return (
    <div 
    className="d-flex vh-100 justify-content-center align-items-center"
    >
  <div 
  className="container h-100"
  >
    <div
     className="row h-100"
     >
      <div 
      className="col-md-4 h-100"
      >
        <div className="d-flex flex-column p-4 bg-white rounded shadow-sm h-100">
        <AddToDo/>
        </div>
      </div>
      <div 
      className="col-md-6 offset-md-1 h-100"
      >
        <div className="p-4 bg-white rounded shadow-sm h-100 d-flex flex-column">
        <TaskList/>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default App