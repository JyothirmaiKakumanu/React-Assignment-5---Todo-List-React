import React from 'react';
import EditItem from './EditItem';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';


const DisplayTasks = (props) => {
    // console.log(`text${props.text}`);
    console.log("inside display tasks");
    return (
        <>
            {/* {props.taskArr.map((item,index)=>{ */}
            <div className="container">
                <li className ={props.className}
                 id = {props.id}
                 key={props.key} value={props.text}>{props.text}
                
                <button type="button" className ="edit" onClick={()=>{
                    console.log("inside button edit");
               
                    return (<EditItem key={props.key}
                     value={props.value} 
                     id={props.id} 
                     className="edit"
                     onEdit ={props.onEdit}/>)}}>Edit</button> 
                        
                    
                <button type="button" className="delete" onClick={()=>{
                        props.ondelete(props.id)
                }}>
                    Delete
                </button>
                    
                </li>
            </div>
            
        </>
    );
};

export default DisplayTasks;