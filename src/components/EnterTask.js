import React from 'react';

const EnterTask = (props) => {
    
    return (
        <div>
            <textarea 
                id={props.id}
                value={props.value}
                onChange = {props.onChange}
            />
        
        </div>
    );
};

export default EnterTask;