import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, followUser, unfollowUser, ...props}) => {

        return (
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
                {users.map( u => 
                    <User user={u} followingInProgress={followingInProgress} unfollowUser={unfollowUser} followUser={followUser}/>
            )
            }   
            </div>
        )
}

export default Users;