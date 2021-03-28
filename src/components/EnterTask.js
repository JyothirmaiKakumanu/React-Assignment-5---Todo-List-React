import React from 'react';

const EnterTask = (props) => {
    
    return (        
            <input 
                id={props.id}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange = {props.onChange}
            />
        
        
    );
};

export default EnterTask;