import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'samurai-network/user/FOLLOW';
const UNFOLLOW = 'samurai-network/user/UNFOLLOW';
const SET_USERS = 'samurai-network/user/SET-USERS';
const SET_CURRENT_PAGE = 'samurai-network/user/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'samurai-network/user/SET-TOTAL-COUNT';
const SET_IS_FETCHING = 'samurai-network/user/SET-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-network/user/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                 ...state, 
                //  users: state.users.map( u => {
                //     if (u.id === action.userId) {
                //         return  {
                //             ...u, 
                //             followed: true
                //         }
                //     }
                //     return u;
                //  })
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state, 
                // users: state.users.map( u => {
                //    if (u.id === action.userId) {
                //        return  {
                //            ...u, 
                //            followed: false
                //        }
                //    }
                //    return u;
                // })
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
           }

        case SET_USERS: 
           return {
                ...state,
                users: [...action.users]
           }

        case SET_CURRENT_PAGE: 
           return {
                ...state,
                currentPage: action.currentPage
           }
        case SET_TOTAL_COUNT: 
           return {
                ...state,
                totalUsersCount: action.totalCount
           }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {
                    ...state,
                    followingInProgress: action.isFetching ? 
                    [...state.followingInProgress, action.userId] : 
                    state.followingInProgress.filter(id => id !== action.userId),
                }

        default:
            return state;
    }
}



export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page });

export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount: totalCount });

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching: isFetching});

export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId});

export const getUsers = (page, pageSize) => { //Thunk
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
    
}

const followUnfolowFlow = async (dispatch, userId, method, actionCreator ) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        let data = await method(userId);
        if(data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
                                                
        dispatch(toggleIsFollowingProgress(false, userId));
}

export const followUser = (userId) => {
    return async (dispatch) => {
        followUnfolowFlow(dispatch, userId, usersAPI.follow, follow);
    //     dispatch(toggleIsFollowingProgress(true, userId));
    //     let data = await usersAPI.unfollow(userId);
    //     if(data.resultCode === 0) {
    //         dispatch(unfollow(userId));
    //     }
                                                
    //     dispatch(toggleIsFollowingProgress(false, userId));
    }
}

export const unfollowUser = (userId) => {
    return async (dispatch) => {
        followUnfolowFlow(dispatch, userId, usersAPI.unfollow, unfollow);
    //     dispatch(toggleIsFollowingProgress(true, userId));
    //     let data = await usersAPI.unfollow(userId);
    //     if(data.resultCode === 0) {
    //         dispatch(follow(userId));
    //     }
                                                
    //     dispatch(toggleIsFollowingProgress(false, userId));
    }
}


export default usersReducer;