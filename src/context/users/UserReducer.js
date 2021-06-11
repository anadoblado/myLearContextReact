import {GET_USERS, GET_PROFILE } from '../types';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;  //paylod son los datos que me estan pasando en la funcion

  switch (type) {
    case GET_USERS:
      return {
        ...state, //retorna el estado
        users: payload, // y le paso los datos al array users 
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};
