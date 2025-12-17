import axios from 'axios';
import Profile from './Profile';
import { getUser, getUserStatus, setUserProfile, updateUserStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            
            userId = this.props.authorizedUserId;
                    
            if(!userId){
                this.props.history.push("/login");
            }
            
        }
        // profileAPI.getUserProfile(userId)
        //     .then(data => {
        //         this.props.setUserProfile(data);
        //     });
        this.props.getUser(userId);
        this.props.getUserStatus(userId);
    }
    render () {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
    }
}



// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.user,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth, 
});

function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

// let WithUlrDataConainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {setUserProfile, getUser})(WithUlrDataConainerComponent);

export default compose(
    connect(mapStateToProps, {setUserProfile, getUser, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer);