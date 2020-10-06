const UPDATE_TEXT_ADD_POST = 'UPDATE-TEXT__ADD-POST';
const CLICKS_ADD_POST = 'CLICKS__ADD-POST';

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
        if (action.type === 'CLICKS__ADD-POST') {
            let postObject = { post: this._state.profilePage.newPostText }
            this._state.profilePage.postData.unshift(postObject);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-TEXT__ADD-POST') {
            this._state.profilePage.newPostText = action.text;
            this._rerenderEntireTree(this._state);
        }
    }
};

export const updateTextCreateAction = (text) => ({ type: UPDATE_TEXT_ADD_POST, text: text })
export const clickCreateAction = () => ({ type: CLICKS_ADD_POST });

export default store;