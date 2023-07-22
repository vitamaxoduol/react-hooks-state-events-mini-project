// import { useState } from "react";
import React from "react";
// import Task from "./Task";

function TaskList({tasks}) {
  // const [displaysTasks, setDisplayTasks] = useState('All')
  return (
    <div className="tasks">
      <ul>
      {/* display a list of tasks using Task component */}
       
       {tasks.map((task, index) => (
         <li key={index}>
           {task.text} - {task.category}
         </li>
       ))}
     </ul>
     
    </div>
  );
}

export default TaskList;
