import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from 'uuid';

// export function Counter() {
//     console.log("Counter rendered")
//     let arr = useState(5)
//     let data = arr[0]
//     let setData = arr[1]
//
//     return <div onClick={()=>{setData(data+1)}}>{data}</div>
// }

export type FilterValuesType = "all" | "completed" | "active";

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS&HTML", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQl", isDone: false}
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks);
    }

    function addTasks(title:string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>("all")

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === false);
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTasks={addTasks}
            />
        </div>
    );
}

export default App;
