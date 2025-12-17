import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import StoreContext from '../../../StoreContext';



// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
                
//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text));
//                     }

//                     return (
//                         <MyPosts updateNewPostText ={onPostChange} 
//                         addPost={addPost} 
//                         posts={state.profilePage.posts} 
//                         newPostText={state.profilePage.newPostText}/>
//                     )
                    
//                 }
//             }         
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => { dispatch(addPostActionCreator(postText)) },
        updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) },
    }
}

// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
const MyPostsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(MyPosts);

export default MyPostsContainer;