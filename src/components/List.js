// import React, { useState } from 'react'



// function List() {

//     const [tasks, setTasks] = useState(['eatinggg', 'sleeping'])
//     const [task, setTask] = useState('')


//     const deleteTask = (i) => {
//         const newTask = [...tasks];
//         newTask.splice(i, 1)
//         setTasks(newTask)
//     }

//     const allTasks = () => {
//         return tasks.map((task, index) => <li onClick={() => { deleteTask(index) }} className="list-group-item">{task}</li>)
//     }


//     const addTask = (addNewTask) => {
//         if (task) {
//             const newTask = [...tasks];
//             newTask.push(addNewTask)
//             setTasks(newTask)
//             setTask('');
//         }
//         else { alert('type valid value') }
//     }

//     return (
//         <div>
//             <div className='container'>
//                 <input className='form-control' placeholder={'type your list'} value={task} onChange={(e) => { setTask(e.target.value) }} />
//                 <button className={'btn btn-success w-100'} onClick={() => addTask(task)} >Add Task</button>
//                 <ul className="list-group">
//                     {allTasks()}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default List
