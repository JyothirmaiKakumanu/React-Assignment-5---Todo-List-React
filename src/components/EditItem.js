// import React, { useState } from 'react';

// const EditItem = (props) => {
//     const [editReq,seteditReq] = useState({show:false});
//     const [editTask,setEdittask] = useState('');

//     console.log("in edit item component");
    
//     const addEdit=()=>{
//         console.log("in line 8");
//         seteditReq({show:true});
//     }
//     const editTaskFunc =(e)=>{
//         console.log("in line 12");
//         setEdittask(e.target.value);
//     }
//     return (
//         <>
//            {editReq.show?
//            (
//            <>
//            <input type="text"
//                 key={props.key}
//                 value={props.value}
//                 className={props.className}
//                 onChange={editTaskFunc}
//             />
//             <button type="button" 
//             className="saveTask"
//             onClick = {()=>{
//                 props.onEdit(editTask);
//                 seteditReq({show:false});
//             }}>Save</button> 
//             </>)
//             :
//             <button type="button" className={props.className} onChange={addEdit}>
//                 Edit</button>
//             }
   
//         </>
//     );
// };

// export default EditItem;