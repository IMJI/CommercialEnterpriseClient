import React, { ReactNode } from 'react';
import Icon from '../icons/Icon';
import './Notification.module.css';
import classes from './Notification.module.css';

type Props = {
    type: string;
    children: string;
    showInMs?: number;
    closable?: boolean;
    showIcon?: boolean;
}

const colors = {
    info: '',
    success: '',
    warning: '',
    error: '#D30000'
}

function getColorOfType(type: string) {
    switch (type) {
        case 'info':
            return colors.info;
        case 'success':
            return colors.success;
        case 'warning':
            return colors.warning;
        case 'error':
            return colors.error;
        default:
            return '#000';
    }
}

function Notification({ type, children, showIcon, showInMs, closable }: Props) {
    return (
        <div
            className={`${classes[type]} ${classes.notification}`}
        >
            <div className={classes.notificationBody}>
                {showIcon ? <Icon
                    name={type}
                    stroke={2}
                    color={getColorOfType(type)}
                    outlined
                /> : ''}
                <span className={classes.notificationMessage}>{children}</span>
            </div>
            {closable
                ? <button
                    className={classes.closeButton}
                ><Icon name='close' color={getColorOfType(type)} stroke={2} outlined /></button>
                : ''
            }
        </div>
    );
}

export default Notification;