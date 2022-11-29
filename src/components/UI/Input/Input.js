import React, {useImperativeHandle, useRef} from 'react';
import classes from "../../Login/Login.module.css";


const Input = React.forwardRef((props, ref) => {
        const inputRef = useRef();

        const activateFocus = () => {
            inputRef.current.focus();
        }

        //the obj contains all the data we are able to use from outside,
        //useImperativeHandle---> use functionalities from this component
        //without even using state/props management, not by controlling the component through parent state management
        //by directly calling and calc sth programmatically in the component
        useImperativeHandle((ref), () => {
            return {focus: activateFocus}
        });

        return (
            <div
                className={`${classes.control} ${
                    // props.isValid === false ? classes.invalid : ''
                    props.isValid || classes.invalid
                }`}
            >
                <label htmlFor={props.id}>{props.label}</label>
                <input
                    ref={inputRef}
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            </div>
        );
    }
);
export default Input;
