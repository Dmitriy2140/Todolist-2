import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

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
        {id: 1, title: "CSS&HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("all")

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }
    

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks);
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
            />
        </div>
    );
}


export default App;
