import React from 'react';
import useGlobalState from '../hooks/GlobalState';
import { Navigate } from 'react-router-dom';
import useLocalStorage from '../hooks/LocalStorage';
import User from '../models/User';

type LayoutProps = {
    children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    const { state } = useGlobalState();
    const [user, setUser] = useLocalStorage('user', {});

    const isLoggedIn = !!(user && (user as User).token);

    return (
        isLoggedIn ? (
            <div>
                <div>{(user as User).email}</div>
                {children}
            </div>
          ) : (
            <Navigate to='/login' />
          )
    );
}

export default Layout;