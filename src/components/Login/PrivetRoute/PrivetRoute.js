import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../../App';
import Admin from '../Admin/Admin';

const PrivetRoute = () => {
    const [loginUser] = useContext(UserContext)
    return loginUser.email ? <Outlet /> : <Admin />
};

export default PrivetRoute;