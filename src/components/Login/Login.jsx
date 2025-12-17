// import { Field, reduxForm } from "redux-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from "./../../components/Common/FormsControls/FormControls.module.css";

const Login = ({isAuth, failedMessage, login}) => {

    // const onSubmit = (formData) => {
    //     console.log('fr');
    //     console.log(formData);
    // }
    
    if(isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <div>{failedMessage ?? ''}</div>
        <LoginForm login={login}/>
    </div>
}

const LoginForm = ({login}) => {
    const { register, handleSubmit, formState: {errors, isValid}, setError } = useForm({
        defaultValues: {rememberMe: false},
    });
    const onSubmit = (data) => {
        login(data.login, data.password, data.rememberMe, setError)
    };
    

    return (
    // <form onSubmit={props.hanldeSubmit}>
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <div>
            {/* <Field component={"input"} name={"login"} type="text" placeholder={"login"} /> */}
            {/* <input {...register("login", { required: true, maxLength: 20 })} />
            {errors.login && errors.login.type === "required" && <span>This is required</span>}
            {errors.login && errors.login.type === "maxLength" && <span>Max length exceeded</span> } */}
            <Input {...register("login", { required: true, maxLength: 30 })} errors={errors.login} />
        </div>
        <div>
            {/* <Field component={"input"} name={"password"} type="password" placeholder={"password"} /> */}
            {/* <input type="password" {...register("password", { required: true })} />
            {errors.password && errors.password.type === "required" && <span>This is required</span>} */}
            <Input  type="password"{...register("password", { required: true, maxLength: 20 })} errors={errors.password}/>
        </div>
        <div>
            {/* <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> */}
            <input type="checkbox" {...register("rememberMe")} />
            Remember me
        </div>
        {/* { props.error ?? <div style={s.formSummaryError}>
            {props.error}
        </div> } */}

        {errors.server &&
            <div className={s.formSummaryError}>
                <span>{errors.server.message}</span>
            </div>}
        <div>
            <button>login</button>
        </div>
    </form>
    )
}

// const LoginReduxForm = reduxForm({
//     form: 'login',
// })(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    failedMessage: state.auth.failedMessage,
})

export default connect(mapStateToProps, {login})(Login);