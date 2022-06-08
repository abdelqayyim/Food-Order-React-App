import React, {forwardRef} from 'react'; 
import './Input.css';

const Input = forwardRef((props,ref)=>{
    return (
        <div className='input'>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}></input>
        </div>
    )
});

export default Input;