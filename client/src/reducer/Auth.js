import {AUTH, LOGOUT} from "../constants/actions";

const authReducer = (action, state = {authData: null}) =>{
    switch(action.type){
        case AUTH:
            console.log(action?.data);
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        default:
            return state;
    }
};

export default authReducer;