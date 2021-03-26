import React, { useState } from 'react';
// import EditItem from './EditItem';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';


const DisplayTasks = (props) => {
    // console.log(`text${props.text}`);
    console.log("inside display tasks");
    const [editReq,seteditReq] = useState({show:false,});
    const [editTask,setEdittask] = useState('');

    console.log("in edit item component1");
    
    const addEdit=()=>{
        console.log("in line 8");
        seteditReq({show:true});
    }
    const editTaskFunc =(e)=>{
        console.log("in line 12");
        setEdittask(e.target.value);
    }

    return (
        <>
            {/* {props.taskArr.map((item,index)=>{ */}
            <div className="container">
                <li className ={props.className}
                //  id = {props.id}
                //  key={props.key}
                //   value={props.text}
                  >{props.text}</li>
                  <button type="button" className="delete" onClick={()=>{
                        props.ondelete(props.id)
                }}>
                    Delete
                </button>
                


                   {(editReq.show)?
                            (
                            <>
                            <br/>
                            <input type="text"
                                //  key={props.key}
                                //  value={props.value}
                                 className="editTask"
                                 placeholder="Edit"
                                 onChange={editTaskFunc}
                             />
                             <button
                             className="saveTask"
                             onClick = {()=>{
                                 props.onEdit(props.id,editTask);
                                 seteditReq({show:false});
                             }}>Save</button> 
                             </>)
                             : 
                             (<button type="button" className={props.className} onClick={addEdit}>
                                 Edit</button>
                             )}
            </div>
            
        </>
    );
};
export default DisplayTasks;