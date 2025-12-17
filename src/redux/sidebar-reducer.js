const avatarUrl = 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png';
let initialState = {
    friends: [
        {id: 1, img: avatarUrl, name: 'Aleksa'},
        {id: 2, img: avatarUrl, name: 'Richards'},
        {id: 3, img: avatarUrl, name: 'Vilhelm'},
      ],
};
const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;