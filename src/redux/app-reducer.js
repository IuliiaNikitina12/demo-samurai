import { authAPI } from "../api/api";
import { authUser, setUserData } from "./auth-reducer";

const SET_INISIALIZED = 'SET-INISIALIZED';
let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INISIALIZED:
            return {
                 ...state, 
                 initialized: true,
            }
        default:
            return state;
    }
}



export const setInitializedSuccess = () => ({ type: SET_INISIALIZED});


export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authUser());

        Promise.all([promise]).then(() => {
            dispatch(setInitializedSuccess());
        });
        
    }
}


export default appReducer;