import React from "react";
import classes from './Status.module.css';

type Props = {
    type: 'success' | 'warning' | 'error';
    status: string;
}

const styles = {
    success: classes.success,
    warning: classes.warning,
    error: classes.error
};

function Status({ type, status }: Props) {
    
    return (
        <div className={`${styles[type]} ${classes.status}`}>
            <div className={classes.point}></div>
            <span className={classes.statusText}>{status}</span>
        </div>
    );
}

export default Status;