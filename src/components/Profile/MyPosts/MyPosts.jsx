import React, { PureComponent, useRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { useForm } from 'react-hook-form';
import { Textarea } from '../../Common/FormsControls/FormsControls';
// import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';



// class MyPosts extends PureComponent {
const MyPosts = React.memo((props) => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != props || nextState != this.state;
    // }
        let postsElements = [...props.posts]
        .reverse()
        .map( p => <Post message={p.post} like={p.likesCount} key={p.id}/> );

    let newwPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newwPostElement.current.value;
        props.updateNewPostText(text);
        // props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                <AddPostForm addPost={props.addPost}/>
                    
                </div>
                <div className={s.posts}>
                    { postsElements }
                </div>
            </div>
    );

    
});

const AddPostForm = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm({});

    const onSubmit = (data) => props.addPost(data.postText);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            {/* <textarea {...register("postText")}/> */}
            <Textarea {...register("postText", {required: true})} errors={errors.postText}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

export default MyPosts;