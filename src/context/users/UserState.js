import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';
import { GET_USERS, GET_PROFILE } from "../types";

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null,
    }
    
    //const [state, setstate] = useState(initialState);
    const [state, dispatch] = useReducer(UserReducer, initialState); //define el estado y lo actualiza

    // traerlos todos

    // const getUsers = async () => {
    //     try {
    //         const list = await axios.get('https://reqres.in/api/users');
    //         const filterListed = list.data.data;
    //         console.log(filterListed);
    //         dispatch({
    //             type: GET_USERS,
    //             payload: filterListed
    //         });
    //     } catch (error) {
    //         console.groupCollapsed(error);
    //     }
       
    // }

    async function getUsers(){
        try {
            const list = await axios.get('https://reqres.in/api/users');
            const filterListed = list.data.data;
            console.log(filterListed);
            dispatch({
                type: GET_USERS,
                payload: filterListed
            });
        } catch (error) {
            console.groupCollapsed(error);
        }
    }
    
    
    //usar solo uno
    // const getProfile = async (id) => {
    //     try {
    //         const res = await axios.get("https://reqres.in/api/users/" + id);
    //         const { data }= res;
    //         dispatch({ type: GET_PROFILE, payload: data.data });
    //       } catch (error) {
    //             console.error(error);
    //       }
    //     };

    async function getProfile(id){
        try {
            const user = await axios.get(`https://reqres.in/api/users/${id}`);
            const theUser = user.data.data;
            console.log(theUser);
            dispatch({ 
                type: GET_PROFILE, 
                payload: theUser
            });            
        } catch (error) {
            console.error(error);
        }



    }

   // const value = {users: state.users, selectedUser: state.selectedUser, getUsers, getProfile}

    return(
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile,
          }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;



