import React, { useState } from "react";
import "./../styles/App.css";
import EnterTask from "./EnterTask";
import DisplayTasks from "./DisplayTasks";

function App() 
{
	const [task,setTask] = useState({
		taskName: "",
	});
	const [taskArr,setTaskArr]= useState([]);


	const AddItem=()=>{
		console.log(`inside add item`);
		if(task.taskName !== ""){
			console.log("inside add item if");
			setTaskArr([...taskArr,task.taskName]);
			
		}
		console.log(`taskArr${taskArr}`);
		taskArr.map((itm,index)=>{
			console.log("inside map");
			console.log("index"+index+"item"+itm);
		})
	}

	const handleChange=(event)=>{
		// setTask(()=>{
		// 	{taskName:event.target.value}
		// });
		setTask({taskName :event.target.value});
		console.log(`line28${task}`);
	}

	return (
	<div id="main">
		<h1>ToDo List</h1>
		<br/>
		<EnterTask id="task"
			// value={task.taskName}
			// onChange={(e)=>setTask(e.target.value)} 
			onChange ={handleChange}
			placeholder="Enter the task"/>
		<br/>
		<button id="btn"
			onClick={AddItem}>
			Add task
		</button>
		{/* <ol>
			{/* {taskArr.map((item,index)=>{ */}
				{/* <DisplayTasks 
					className="list" */}
					{/* // key={index}
					// id={index}
					taskArr = {taskArr}
					// value={task.taskName}
					// text={task.taskName} */}
				{/* /> */}
			{/* })} */}
			{/* <li>Hi</li> */}
			
		
		<ol>
			{taskArr.map((item,index)=>{
				return (
					<li>
						{item.taskName}
					</li>
				)
			})}
		</ol>
		
	</div>
	);
}


export default App;
