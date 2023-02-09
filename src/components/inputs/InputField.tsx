import React, { Dispatch, SetStateAction } from 'react';
import classes from './InputField.module.css';

type Props = {
    label: string;
    id: string;
    value: string;
    onValueChange: Dispatch<SetStateAction<string>>
}

function InputField({ label, id, value, onValueChange, ...rest }: Props & React.ComponentPropsWithoutRef<"input">) {
    return (
        <div className={classes.fieldContainer}>
            <label htmlFor={id} className={classes.label}>{label}</label>
            <input
                id={id}
                className={classes.inputField}
                value={value}
                onChange={({ target: { value } }) => onValueChange(value)}
                {...rest}
            />
        </div>
    );
};

export default InputField;