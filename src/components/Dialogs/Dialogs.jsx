import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator } from '../../utils/validators/validators';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar} /> );
    let messagesElements = props.dialogsPage.messages
        .map( m => <Message message={m.message} userId={m.userId} key={m.id} />);

    // let newMessage = React.createRef();

    // let addMessage = () => {
    //     // props.dispatch(addMessageCreator());
    //     props.addMessage();
    // }
    // let changeMesageText = (e) => {
    //     let newText = e.target.value;
    //     props.updateNewMessageBody(newText);
    //     // props.dispatch(updateNewMessageTextCreator(newText));
    // }

    

    if(!props.isAuth) {
        return <Navigate to={"/login"} />
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <AddMessageForm addMessage={props.addMessage} />
            </div>
        </div>
    );
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    // let addNewMessage = (values) => {
    //     props.addMessage(values.message);
    // }
    const { register, handleSubmit, formState: {errors} } = useForm({
    });
    const onSubmit = (data) => props.addMessage(data.message);
    return <form onSubmit={handleSubmit(onSubmit)}>
        {/* <textarea {...register("message", { required: true, maxLength: 20 })} placeholder='Enter your message'></textarea> */}
        <Textarea {...register("message", { required: true, maxLength: 20 })} placeholder='Enter your message' errors={errors.message}/>
        <button>Send message</button>
    </form>
}

export default Dialogs;