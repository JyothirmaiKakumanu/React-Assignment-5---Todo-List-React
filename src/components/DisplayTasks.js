import React from 'react';

const DisplayTasks = (props) => {
    // console.log(`text${props.text}`);
    
    return (
        <>
            {props.taskArr.map((item,index)=>{
                <li className ={props.className}
                key={index}>
                    {item.taskName}
                </li>
            })}
               
               
        </>
    );
};

export default DisplayTasks;