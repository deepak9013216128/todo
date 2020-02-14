import React from 'react';

import './form-input.style.css';

const FormInput = ({handleChange,label,...otherProps}) => (
    <div >
        {
            label?(
            <span className='todo-label' >
                {label}
            </span>
            )
            :null
        }
        <input onChange={handleChange} {...otherProps} />
        
    </div>
)

export default FormInput;