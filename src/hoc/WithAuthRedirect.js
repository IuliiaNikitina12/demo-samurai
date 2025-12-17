import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const WithAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isAuth) {
            return <Navigate to={"/login"} />
        }
        return <Component {...props} />
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}