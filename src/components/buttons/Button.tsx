import React, { ReactNode } from 'react';
import classes from './Button.module.css';

type Props = {
    children: ReactNode;
    onClick: any;
}

function Button({ children, onClick, ...rest}: Props & React.ComponentPropsWithoutRef<"button">) {
    return (
        <button
            className={classes.button}
            onClick={onClick}
            {...rest}
        >{children}</button>
    );
}

export default Button;