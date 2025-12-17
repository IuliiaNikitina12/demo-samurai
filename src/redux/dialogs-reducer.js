const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-NESSAGE-TEXT';

const avatarUrl = 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png';
let initialState = {
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
    //   newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: 
            return {
                ...state,
                // newMessageText: '',
                messages: [...state.messages, {id: 5, message: action.message, userId: 1}],
            };

        // case UPDATE_NEW_MESSAGE_TEXT: 
        //     return {
        //         ...state,
        //         newMessageText: action.newText,
        //     };
    
        default:
            return state;
    }
}
export const addMessageCreator = (message) => ({ type: ADD_MESSAGE, message });

export const updateNewMessageTextCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newText: text,
});
export default dialogsReducer;