import React, { useState } from "react";
import classes from './Checkbox.module.css';

type Props = {
    name: string;
    text?: string;
    checked?: boolean;
    onChange: any;
}

function Checkbox({ name, text, checked, onChange }: Props) {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <div className={classes.container}>
            <input
                className={classes.checkboxInput}
                id={name}
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                    setIsChecked(!isChecked);
                    onChange();
                }}
            />
            <label className={classes.checkbox} htmlFor={name}>
                <span>
                    <svg width="24px" height="24px">
                        <use xlinkHref="./icons.svg#check"></use>
                    </svg>
                </span>
                {text ? <span>{text}</span> : ''}
            </label>
        </div>
    );
}

export default Checkbox;