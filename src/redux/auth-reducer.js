import { authAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';
const SET_USER_DATA_FAILED = 'samurai-network/auth/SET-USER-DATA-FAILED';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    failedMessage: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                 ...state, 
                 ...action.payload,
                //  isAuth: action.payload.isAuth,
            }

        case SET_USER_DATA_FAILED:
            return {
                ...state, 
                failedMessage: action.failedMessage,
                }

        default:
            return state;
    }
}



export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const setUserDataFailed = (failedMessage) => ({ type: SET_USER_DATA_FAILED, failedMessage});

export const authUser = () => {
    return async (dispatch) => {
        // return authAPI.checkAuth()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let {id, email, login} = data.data;
        //             dispatch(setUserData(id, email, login, true));
        //         }
        //     });
        let data = await authAPI.checkAuth();
            
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe, setError) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe);
                if (data.resultCode === 0) {
                    dispatch(authUser());
                }
                else  {
                    // let action = stopSubmit('login', {_error: "Email or password is wrong"});
                    // dispatch(stopSubmit('login', {_error: "data.messages[0]"});
                    let message = data.messages.length ?data.messages[0] : '';
                    // dispatch(setUserDataFailed(message));
                    setError("server", {
                        type: "custom",
                        message: message
                    });
                }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false));
                }
    }
}



export default authReducer;