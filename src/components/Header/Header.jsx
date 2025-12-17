import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png' alt="logo" />

            <div className={s.loginBlock}>
                {props.isAuth ? 
                <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>: 
                <NavLink to='/login'>Login</NavLink>
                }
                
            </div>
        </header>
    );
}

export default Header;