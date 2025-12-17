import React from "react";
import Header from "./Header";
import axios from "axios";
import { authUser, logout, setUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount () {
        // authAPI.checkAuth()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let {id, email, login} = data.data;
        //             this.props.setUserData(id, email, login);
        //         }
        //     });
        this.props.authUser();

    }
    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(mapStateToProps, {setUserData, authUser, logout})(HeaderContainer);