import React, { useEffect, useContext } from 'react';
import UserContext from '../context/users/UserContext'

const UserList = () => {

    const { users, getUsers, getProfile} = useContext(UserContext);

    useEffect(() => {
        getUsers();
        getProfile(1);
    },[])

    return(
        <div className="list-group h-100">
             {
               users.map((user) => {
                    <a href="" key={user.id}>{`${user.first_name} ${user.last_name}`}</a>
                }) 
            }
        </div>
    );
}

export default UserList;