import React, { useState } from "react";
import "./../styles/App.css";
import EnterTask from "./EnterTask";
import DisplayTasks from "./DisplayTasks";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {faEdit} from '@fortawesome/free-solid-svg-icons';

// library.add(faEdit);

function App() 
{
	// const [task,setTask] = useState({
	// 	taskName: "",
	// });
	const [task,setTask] = useState('');
	const [taskArr,setTaskArr]= useState([]);


	const addItem=(e)=>{
		e.preventDefault();
		console.log(`inside add item`);
		if(task !== ""){
			console.log("inside add item if");
			setTaskArr([...taskArr,task]);
			setTask('');
		}
		console.log(`taskArr${taskArr}`);
		taskArr.map((itm,index)=>{
			console.log("inside map");
			console.log("index"+index+"item"+itm);
		})
	}

	const handleInput=(event)=>{
		setTask(event.target.value);
		console.log(`line28${task}`);
	}

	const deleteItems=(id)=>{
		console.log("inside del fnc");
		// const arr = taskArr.slice();
		 const filteredArr = taskArr.filter((item,index)=>{
		 return index!==id});
		 setTaskArr(filteredArr);
		// setTaskArr((item) => {
		// 	console.log("item"+item);
		// 	return item.filter((arrEle, index) => {
		// 	  return index !== id;
		// 	});
		// });
		console.log("line47"+taskArr);
	}

	const editItems=(id,value)=>{
		if (value !== "") {
			setTaskArr((item) => {
			  item[id] = value;
			  return [...item];
			});
		  }
}

	return (
	<div id="main">
		<h1>ToDo List</h1>
		<br/>
		<EnterTask id="task"
			value={task}
			type="text"
			// onChange={(e)=>setTask(e.target.value)} 
			onChange ={handleInput}
			placeholder="Enter the task"/>
		<br/>
		<button id="btn"
		
			onClick={addItem}>
			Add task
		</button>
		<ol>
			{taskArr.map((item,index)=>{
				console.log("before return");
				return (
					<DisplayTasks
						className ="list"
						classNameDelete="delete"
                		classNameEdit="edit"
						key={index}
						id={index}
						text={item}
						value={item}
						ondelete ={deleteItems}
						onEdit ={editItems}
					/>
				)
			})}
		</ol>
	
		
	</div>
	);
}


export default App;
