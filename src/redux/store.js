// let rerenderEntireTree = () => {
//   console.log('state');
// }

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

 
const avatarUrl = 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, post: 'Hi! How are you?', likesCount: 12},
        {id: 1, post: 'It\'s my first post', likesCount: 20},
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych', avatar: avatarUrl},
        {id: 2, name: 'Andrey', avatar: avatarUrl},
        {id: 3, name: 'Sveta', avatar: avatarUrl},
        {id: 4, name: 'Julia', avatar: avatarUrl},
        {id: 5, name: 'Sacha', avatar: avatarUrl},
        {id: 6, name: 'Valera', avatar: avatarUrl},
      ],
    messages: [
        {id: 1, message: 'Hi', userId: 1},
        {id: 2, message: 'Ho is you it-kamasutra?', userId: 2},
        {id: 3, message: 'Yo!', userId: 1},
      ],
      newMessageText: '',
    },
    sidebar: {
      friends: [
        {id: 1, img: avatarUrl, name: 'Aleksa'},
        {id: 2, img: avatarUrl, name: 'Richards'},
        {id: 3, img: avatarUrl, name: 'Vilhelm'},
      ],
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },
  // addPost: () => {
  //   let newPost = {
  //     id: 5,
  //     post: store._state.profilePage.newPostText, // явная ссылка на store
  //     likesCount: 1,
  //   };
  //   store._state.profilePage.posts.push(newPost);
  //   store._state.profilePage.newPostText = '';
  //   store._callSubscriber(store._state);
  // },
  
  // updateNewPostText: (newText) => {
  //   store._state.profilePage.newPostText = newText;
  //   store._callSubscriber(store._state);
  // },
  
  // addMessage: () => {
  //   let newMessage = {
  //     id: 1,
  //     message: store._state.dialogsPage.newMessageText,
  //     userId: 1,
  //   };
  //   store._state.dialogsPage.messages.push(newMessage);
  //   store._state.dialogsPage.newMessageText = '';
  //   store._callSubscriber(store._state);
  // },
  
  // updateNewMessageText: (newText) => {
  //   store._state.dialogsPage.newMessageText = newText;
  //   store._callSubscriber(store._state);
  // },
  // addPost() {
  //   debugger;
  //   let newPost = {
  //     id: 5,
  //     post: this._state.profilePage.newPostText,
  //     likesCount: 1,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  // addMessage() {
  //   let newMessage = {
  //     id: 1,
  //     message: this._state.dialogsPage.newMessageText,
  //     userId: 1,
  //   };
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },
  
  // updateNewMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this._state);
  // },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  setState(state) {
    this._state = state;
  },
  getState() {
    return this._state;
  },
  dispatch: (action) => { // { type 'ADD-POST'}

    store._state.profilePage = profileReducer(store._state.profilePage, action);
    store._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action);
    store._state.sidebar = sidebarReducer(store._state.sidebar, action);
    
    store._callSubscriber(store._state);
  }
  
  

}



export default store;
// let state = {
//     profilePage: {
//       posts: [
//         {id: 1, post: 'Hi! How are you?', likesCount: 12},
//         {id: 1, post: 'It\'s my first post', likesCount: 20},
//       ],
//       newPostText: 'it-kamasutra',
//     },
//     dialogsPage: {
//       dialogs: [
//         {id: 1, name: 'Dimych', avatar: avatarUrl},
//         {id: 2, name: 'Andrey', avatar: avatarUrl},
//         {id: 3, name: 'Sveta', avatar: avatarUrl},
//         {id: 4, name: 'Julia', avatar: avatarUrl},
//         {id: 5, name: 'Sacha', avatar: avatarUrl},
//         {id: 6, name: 'Valera', avatar: avatarUrl},
//       ],
//     messages: [
//         {id: 1, message: 'Hi', userId: 1},
//         {id: 2, message: 'Ho is you it-kamasutra?', userId: 2},
//         {id: 3, message: 'Yo!', userId: 1},
//       ],
//       newMessageText: 'Message',
//     },
//     sidebar: {
//       friends: [
//         {id: 1, img: avatarUrl, name: 'Aleksa'},
//         {id: 2, img: avatarUrl, name: 'Richards'},
//         {id: 3, img: avatarUrl, name: 'Vilhelm'},
//       ],
//     },
// };

// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     post: state.profilePage.newPostText,
//     likesCount: 1,
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }

// export const addMessage = () => {
//   let newMessage = {
//     id: 1,
//     message: state.dialogsPage.newMessageText,
//     userId: 1,
//   };
//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessageText = '';
//   rerenderEntireTree(state);
// }

// export const updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }

// export default state;