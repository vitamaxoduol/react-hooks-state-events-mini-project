import React from "react";

function Task({task, onDelete}) {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete" onClick={() => onDelete(task)}>X</button>
    </div>
  );
}

export default Task;
