let store = {
    _state: {
        profilePage: {
            postData: [],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [],
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
    _callSubscribe() {
        console.log('State Change')
    },

    subscribe(observer) {
        this._callSubscribe = observer; //observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'CLICKS__ADD-POST') {
            let postObj = { post: this._state.profilePage.newPostText }
            this._state.profilePage.postData.unshift(postObj);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state);
        } else if (action.type === 'UPDATE-TEXT__ADD-POST') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscribe(this._state);
        }
    },
};

export default store;