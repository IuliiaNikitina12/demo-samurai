import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";
import Paginator from "../Common/Paginator/Paginator";


let User = ({user, followingInProgress, unfollowUser, followUser}) => {

        return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small != null : userPhoto} alt="" className={s.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                { user.followed 
                                    ? <button disabled={followingInProgress.some(id => id ==user.id)} onClick={ () => {
                                        // props.toggleIsFollowingProgress(true, user.id);
                                        // usersAPI.unfollow(user.id)
                                        //     .then(data => {
                                        //         if(data.resultCode === 0) {
                                        //             props.unfollow(user.id);
                                        //         }
                                                
                                        //     });
                                        //     props.toggleIsFollowingProgress(false, user.id);
                                        unfollowUser(user.id);

                                    }
                                    }>Follow</button> 
                                    : <button disabled={followingInProgress.some(id => id ==user.id)} onClick={ () => {
                                        // props.toggleIsFollowingProgress(true, user.id);
                                        // usersAPI.follow(user.id)
                                        //     .then(data => {
                                        //         if(data.resultCode === 0) {
                                        //             props.follow(user.id);
                                        //         }
                                                
                                        //     });
                                        //     props.toggleIsFollowingProgress(false, user.id);
                                        followUser(user.id);
                                         

                                    }
                                    
                                    
                                    
                                    }>Unfollow</button> }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div><div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                    </div>
        )
}

export default User;