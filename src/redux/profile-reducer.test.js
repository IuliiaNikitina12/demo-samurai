import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import { render, screen } from '@testing-library/react';


test('length on posts should be incremented', () => {
    //1. Test data
    let action = addPostActionCreator("it-kamasutra");
    let state = {
        posts: [
            {id: 1, post: 'Hi! How are you?', likesCount: 12},
            {id: 2, post: 'It\'s my first post', likesCount: 20},
          ],
    }
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    //1. Test data
    let action = addPostActionCreator("it-kamasutra");
    let state = {
        posts: [
            {id: 1, post: 'Hi! How are you?', likesCount: 12},
            {id: 2, post: 'It\'s my first post', likesCount: 20},
          ],
    }
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[2].post).toBe("it-kamasutra");
});

test('after deleting length of message should be decremented', () => {
    //1. Test data
    let action = deletePost(1); 
    let state = {
        posts: [
            {id: 1, post: 'Hi! How are you?', likesCount: 12},
            {id: 2, post: 'It\'s my first post', likesCount: 20},
          ],
    }
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length of message should not be decremented if id is incorrect', () => {
    //1. Test data
    let action = deletePost(1000); 
    let state = {
        posts: [
            {id: 1, post: 'Hi! How are you?', likesCount: 12},
            {id: 2, post: 'It\'s my first post', likesCount: 20},
          ],
    }
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

