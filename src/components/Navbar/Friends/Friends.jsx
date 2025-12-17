import Friend from "./Friend/Friend";
import s from './Friends.module.css';

const Friends = (props) => {
    let friendsElements = props.friends
        .map(el => <Friend img={el.img} name={el.name} />);

    return (
        <div className={s.friends}>
            {friendsElements}
        </div>
    );
}

export default Friends;