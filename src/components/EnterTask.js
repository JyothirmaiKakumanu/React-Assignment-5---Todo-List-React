import React from 'react';

const EnterTask = (props) => {
    
    return (
        <div>
            <textarea 
                id={props.id}
                // value={props.value}
                placeholder={props.placeholder}
                onChange = {props.onChange}
            />
        </div>
    );
};

export default EnterTask;