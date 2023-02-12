import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/LocalStorage';
import User from '../../../models/User';
import UserResponse from '../../../models/UserResponse';
import Fetch from '../../../services/Fetch';
import classes from './Profile.module.css';

function Profile() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [user, setUser] = useLocalStorage('user', {});
    const navigate = useNavigate();
    const token = (user as User).token || '';
    const fetchUsers = new Fetch<UserResponse>('/api/users').auth(token);
    const fetched = fetchUsers.get().then(data => {
        if (data.successful && !(data.data instanceof Array)) {
            const fetchedUser = data.data as unknown as UserResponse;
            setName(`${fetchedUser.firstName} ${fetchedUser.lastName}`);
            setRole(fetchedUser.role);
        } else if (data.error && data.error.status === 401) {
            navigate('/login');
        }
    });

    return (
        <div className={classes.profile}>
            <div className={classes.profilePicture}>

            </div>
            <div className={classes.profileInfo}>
                <span className={classes.profileUser}>{name}</span>
                <span className={classes.profileRole}>{role}</span>
            </div>
        </div>
    );
}

export default Profile;