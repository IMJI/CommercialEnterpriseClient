import React from 'react';
import useGlobalState from '../hooks/GlobalState';
import { Navigate } from 'react-router-dom';
import useLocalStorage from '../hooks/LocalStorage';
import User from '../models/User';
import Sidebar from '../components/sidebar/Sidebar';
import classes from './Layout.module.css'

type LayoutProps = {
    children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    const { state } = useGlobalState();
    const [user, setUser] = useLocalStorage('user', {});

    const isLoggedIn = !!(user && (user as User).token);

    return (
        isLoggedIn ? (
            <div className={classes.layout}>
                <Sidebar />
                {children}
            </div>
          ) : (
            <Navigate to='/login' />
          )
    );
}

export default Layout;