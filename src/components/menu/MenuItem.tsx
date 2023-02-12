import React, { ReactNode } from 'react';
import Icon from '../icons/Icon';
import classes from './Menu.module.css';

type Props = {
    name: string;
    icon?: string;
    action?: any;
}

function MenuItem({ name, icon, action }: Props) {
    icon = icon || 'heart';
    return (
        <div className={classes.menuItem}>
            <Icon name={icon} size={20} stroke={2} outlined />
            <span className={classes.menuName}>{name}</span>
        </div>
    );
}

export default MenuItem;