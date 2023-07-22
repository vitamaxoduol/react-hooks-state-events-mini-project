import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setselectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)




  const filterTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);
  

function addNewTask(newTask) {
  setTasks([...tasks, newTask])
}

function deleteTask(taskToDelete) {
  setTasks(tasks.filter(task => task !== taskToDelete));
}

// function setselectedCategory(category) {
//   console.log(`Changing category to ${category}`);
  

// function nextCategory() {
//   const currentIndex = CATEGORIES.indexOf(selectedCategory);
//   const nextIndex = (currentIndex + 1) % CATEGORIES.length;
//   setselectedCategory(CATEGORIES[nextIndex]);
// }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={setselectedCategory} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={addNewTask} />
      <TaskList tasks={filterTasks} onDeleteTask={deleteTask} />

      {/* <button onClick={nextCategory}>Next Category</button> */}
    </div>
  );
}

export default App;
