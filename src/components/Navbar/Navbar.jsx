import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends/Friends';
import StoreContext from '../../StoreContext';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' className={({isActive}) => (isActive ? (s.activeLink) : "" )}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) => (isActive ? (s.activeLink) : "" )}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={({isActive}) => (isActive ? (s.activeLink) : "" )}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({isActive}) => (isActive ? (s.activeLink) : "" )}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({isActive}) => (isActive ? (s.activeLink) : "" )}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({isActive}) => (isActive ? (s.activeLink) : "" )}>Settings</NavLink>
            </div>

            {/* <StoreContext.Consumer> 
                { (store) => {
                    return (
                        <Friends friends={store.getState().sidebar.friends} />
                    )
                    }
                }
            </StoreContext.Consumer> */}
      </nav>
    );
}

export default Navbar;