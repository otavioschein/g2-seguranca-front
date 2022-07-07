import React, { useState } from 'react';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom'

function User() {
    const location = useLocation();
    const {name} = location.state;
    const [user, setUser] = useState('');

    const handleUser = (u) => {
        setUser(u);
    }

    axios.get(`http://ec2-52-206-14-246.compute-1.amazonaws.com:8082/users/?name=${name}`)
        .then(res => {
            handleUser(res.data);
        })
    
    return (
        <div>
            <nav>
            <Link to='/'>home</Link>
            </nav>
            <h2>User {user.name}</h2>
            <ul>
            <li key='teste1'>
                    {user.name}
                </li>
                <li key='teste2'>
                    {user.email}
                </li>
                <li key='teste3'>
                    {user.enderecoWeb}
                </li>
                <li key='teste4'>
                    {user.professionalExperience}
                </li>
                <li key='teste5'>
                    {user.telefone}
                </li>
            </ul>
        </div>
    ) 
}

export default User;
