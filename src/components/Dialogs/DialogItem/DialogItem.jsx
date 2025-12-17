import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={s.navLink}>
                <img src={props.avatar} alt="{props.name}" />
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;