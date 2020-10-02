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
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log("Refresh page")
    },
    updateText_AddPost(text) {
        this._state.profilePage.newPostText = text;
        this.rerenderEntireTree(this._state);
    },
    clicks_AddPost() {
        let postObj = { post: this._state.profilePage.newPostText }
        this._state.profilePage.postData.unshift(postObj);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;