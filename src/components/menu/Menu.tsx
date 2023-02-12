import React, { ReactNode } from 'react';
import classes from './Menu.module.css';
import MenuItem from './MenuItem';

type MenuItemData = {
    name: string;
    icon?: string;
    action?: any;
}

type Props = {
    items: MenuItemData[]
}

function Menu({ items }: Props) {
    return (
        <div className={classes.menu}>
            {
                items.map(item => {
                    return item.name !== 'hr'
                        ? <MenuItem name={item.name} icon={item.icon} key={item.name} />
                        : <hr className={classes.delimeter} key={item.name} />
                })
            }
        </div>
    );
}

export default Menu;