import { profileAPI } from "../api/api";

const ADD_POST = 'samurai-network/profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'samurai-network/profile/UPDATE-NEW-POST-TEXT';
const SET_USER = 'samurai-network/profile/SET-USER';
const SET_STATUS = 'samurai-network/profile/SET-STATUS';
const DELETE_POST = 'samurai-network/profile/DELETE-POST';

let initialState = {
    posts: [
        {id: 1, post: 'Hi! How are you?', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 20},
      ],
    //   newPostText: 'it-kamasutra',
    
      user: null,
      status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, post: action.newPostText, likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText,
            }

        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)

            }


        default:
            return state;
    }
}



export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, 
      newText: text,
  });

export const setUserProfile = (user) => ({type: SET_USER, user});

const setStatus = (status) => ({type: SET_STATUS, status});

export const getUser = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getUserProfile(userId);
            dispatch(setUserProfile(data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response));
    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.editStatus(status);
        if (response.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}
export default profileReducer;