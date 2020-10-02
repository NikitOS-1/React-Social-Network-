let rerenderEntireTree = () => {

}
let State = {
    ProfilePage: {
        PostData: [],
        newPostText: ''
    },
    MessagesPage: {
        messagesData: [],
        newMessages: ''
    },
    FriendPage: {
        User: [
            { id: 1, name: 'Nikita' },
            { id: 2, name: 'Sasha' },
            { id: 3, name: 'Ira' },
            { id: 4, name: 'Dima' },
            { id: 5, name: 'Vitya' },
            { id: 6, name: 'Vasya' }
        ]
    }
};

export const updateText_AddPost = (text) => {
    State.ProfilePage.newPostText = text;
    rerenderEntireTree(State);
}
export const clicks_AddPost = () => {
    let postObj = { post: State.ProfilePage.newPostText }
    State.ProfilePage.PostData.unshift(postObj);
    State.ProfilePage.newPostText = '';
    rerenderEntireTree(State);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default State;