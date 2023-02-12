import React, { ReactNode } from 'react';
import Icon from '../icons/Icon';
import Menu from '../menu/Menu';
import Profile from './profile/Profile';
import classes from './Sidebar.module.css';

type Props = {
    
}

const menuItems = [
    {
        name: 'Продажи',
        icon: 'data',
        action: ''
    },
    {
        name: 'Подчиненные',
        icon: 'user',
        action: ''
    },
    {
        name: 'Статистика',
        icon: 'stats',
        action: ''
    },
    {
        name: 'hr'
    },
    {
        name: 'Настройки',
        icon: 'settings',
        action: ''
    },
    {
        name: 'Выход',
        icon: 'logout',
        action: ''
    },
];

function Sidebar(props: Props) {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarTop}>
                <div className={classes.header}>
                    <h1 className={classes.title}>Торговое предприятие</h1>
                </div>
                <Profile />
                <div className={classes.menu}>
                    <Menu items={menuItems} />
                </div>
            </div>
            <div className={classes.sidebarBottom}>
                <div className={classes.hideButton}>
                    <Icon name='layout' stroke={2} outlined />
                    <span>Свернуть</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;