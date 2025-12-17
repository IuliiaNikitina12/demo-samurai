import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={`${s.message} ${props.userId == 1 ? 'left' : 'right'}`}>
            <div className={s.body}>
                {props.message}
            </div>
        </div>
    );
}

export default Message;