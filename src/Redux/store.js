// import messagesPageReducer from './messagesPage-reducer';
// import profilePageReducer from './profilePage-reducer';

let store = {
    _state: {
        profilePage: {
            postData: [{ id: 1, post: 'hello' }],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [
                { id: 1, name: 'Nikita', message: 'hello' },
                { id: 1, name: 'Nikita', message: 'hello' },
                { id: 1, name: 'Nikita', message: 'hello' },
                { id: 1, name: 'Nikita', message: 'hello' }
            ],
            newMessages: ''
        },
        friendPage: {
            user: [
                { id: 1, name: 'Nikita' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Ira' },
                { id: 4, name: 'Dima' },
                { id: 5, name: 'Vitya' },
                { id: 6, name: 'Vasya' }
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State Change')
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer; //observer
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        profilePageReducer(this._state.profilePage, action);
        messagesPageReducer(this._state.messagesPage, action);
        this._rerenderEntireTree(this._state);
    }
};


// export default store;