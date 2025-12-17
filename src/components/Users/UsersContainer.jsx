import React from "react";
import { follow, followUser, getUsers, setCurrentPage, toggleIsFollowingProgress, unfollow, unfollowUser } from "../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { getAllUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/users-serectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        // this.props.setIsFetching(true);

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
        let {currentPage, pageSize} = this.props;
        // this.props.getUsers(this.props.currentPage, this.props.pageSize);
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        // this.props.setIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setIsFetching(false);
        //         this.props.setUsers(data.items); 
        //     });
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
            
                {this.props.isFetching ? 
                <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} 
                   pageSize={this.props.pageSize} 
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser} />
            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }

// let withRedirect = WithAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
// export default WithAuthRedirect(connect(mapStateToProps, 
//     {
//         follow,
//         unfollow,
//         // setUsers,
//         setCurrentPage,
//         // setTotalUsersCount,
//         // setIsFetching,
//         toggleIsFollowingProgress,
//         getUsers,
//         followUser,
//         unfollowUser,
//     }
// )(UsersContainer));

export default compose(
    connect(mapStateToProps, 
            {
                // follow,
                // unfollow,
                // setUsers,
                setCurrentPage,
                // setTotalUsersCount,
                // setIsFetching,
                toggleIsFollowingProgress,
                getUsers,
                followUser,
                unfollowUser,}),
    // WithAuthRedirect,
)(UsersContainer);