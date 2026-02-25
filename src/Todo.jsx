import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function Todo() {
    let [todos , setTodos] = useState([{task:"sample-task" , id: uuidv4() , isDone:false}]); //array of object because we have to create each object for each task with their id
//          |
//      array of objects
   
    let [newTodo , setNewTodo] = useState("");

    let updateTodoValue = (event) =>{
        //👉 Here, event is the object automatically passed by the browser when an event happens (like typing, clicking, submitting, etc.).
        setNewTodo(event.target.value); // getting the value entered by the user and storing it in a newTodo state variable.
    };

    let addNewTask = () =>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4() , isDone:false}]; // adding newTodo and id by uuid to the existing todos array of object which is state variable.
        }); 
        setNewTodo(""); //showing the input box empty after adding a new task.
    };

    let deleteTodo = (id) =>{
        setTodos((prevTodos)=>{
            return todos.filter((prevTodos) => prevTodos.id != id); // creating a new array with all todos except the one with  id to be deleted.)
        });
    };
                               
    let upperCaseAll = () => {  
        setTodos((prevTodos) =>        // Here we did not used {} .., {} means “this is a block of code,” not an object.
                                       //  So if you don’t write return, the function returns undefined.

                     //      {~~~~~~~~> one individual object of array of object.
            prevTodos.map((prevTodo) => { //using map to uppercase all tasks in the array, recommended by React.
                return {
                    ...prevTodo,
                    task:prevTodo.task.toUpperCase(),
                };
                //.map() collects all those returned values into a new array.
            
            })
        //setTodos() se  state variable set hoga return hui value map function se .
        );    
    };

    let upperCaseOne = (id) =>{
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) => {
                if(prevTodo.id === id){
                    return {
                        // if id matches then return new object with updated task to uppercase
                        // else return old object as it is
                        ...prevTodo,
                        task:prevTodo.task.toUpperCase(),
                    };
                } else {
                    return prevTodo;
                }
            })
        );
    };

    let isDone = (id) =>{
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) => {
                if(prevTodo.id === id) {
                    return {
                        ...prevTodo,
                        isDone:prevTodo.isDone = true, // if task is done then change its isDone to true
                    }
                }
                else {
                    return prevTodo;
                }
            })
        );
    };


    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            {/* 1.Initially, newTodo = "", so the input is empty.
                2.User types "hello" → onChange fires → updates state.
                3.React re-renders with newTodo = "hello" → input box shows "hello". */}
            
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h4>Todo list</h4>
            <ul>
                {/* rendering array using map method */}
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>
                            {/* {  todo.isDone? ( <strike>{todo.task}</strike> ) : ( <span>{todo.task}</span> )} */}
                            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;

                            {/* using ()  function because not to execute function */} 
                             <button onClick={() => deleteTodo(todo.id)}>delete</button>
                             <button onClick={() => upperCaseOne(todo.id)} >UppercaseOne</button>
                             <button onClick={() => isDone(todo.id)} >isDone</button>
                        </li>
                    ))
                }
            </ul>

            <br></br>

            <button onClick={upperCaseAll} >Uppercase</button>
        </div>
    )
}



// // todo list as a practical project

// import { useState } from "react";
// //solution for the todolist2, here we can add mark as done feature because we are using an array of objects, that stores the info about whether the task is done or not

// function TodoList3() {
//   let [tasks, setTasks] = useState([{ task: "Sample Task", done: false }]);
//   let [newTask, setNewTask] = useState("");

//   let addNewTask = (event) => {
//     setNewTask(event.target.value);
//   };

//   let addTask = () => {
//     console.log("adding new task");
//     if (!newTask.trim()) return; // ignore empty input
//     setTasks([{ task: newTask, done: false }, ...tasks]);
//     setNewTask("");
//   };

//   let deleteTask = (indexToDelete) => {
//     let updatedTasks = tasks.filter((task, index) => {
//       return index !== indexToDelete;
//     });
//     setTasks(updatedTasks);
//   };

//   let updateOne = (updateIndex) => {
//     let updatedTasks = tasks.map((task, index) => {
//       if (index === updateIndex) {
//         return { ...task, task: task.task.toUpperCase() };
//       } else {
//         return task;
//       }
//     });
//     setTasks(updatedTasks);
//   };

//   let updateAll = () => {
//     let updatedTasks = tasks.map((task) => {
//       return { ...task, task: task.task.toUpperCase() };
//     });
//     setTasks(updatedTasks);
//   };

//   let markAsDoneOne = (indexToMark) => {
//     let updatedTasks = tasks.map((task, index) => {
//       if (indexToMark === index) {
//         return { ...task, done: !task.done };
//       } else {
//         return task;
//       }
//     });
//     setTasks(updatedTasks);
//   };

//   let markAsDoneAll = () => {
//     let updatedTasks = tasks.map((task) => {
//       return { ...task, done: !task.done };
//     });
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <input
//         placeholder="Add a task Todo"
//         value={newTask}
//         onChange={addNewTask}
//       />
//       <button onClick={addTask}>Add Task</button>
//       <br />
//       <br />
//       <br />
//       <hr />
//       <h4>Todo List</h4>
//       <ul>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             style={{ textDecoration: task.done ? "line-through" : "none" }}>
//             {task.task}
//             <button
//               onClick={() => {
//                 deleteTask(index);
//               }}>
//               &#10060;
//             </button>
//             <button onClick={() => updateOne(index)}>Uppercase</button>
//             <button onClick={() => markAsDoneOne(index)}>
//               {task.done ? "Undo" : "Done"}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={updateAll}>UpperCase All</button>
//       <br />
//       <button onClick={markAsDoneAll}>Mark all as done</button>
//     </div>
//   );
// }

// export default TodoList3;