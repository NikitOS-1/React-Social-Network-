const UPDATE_TEXT_ADD_POST = 'UPDATE-TEXT__ADD-POST';
const CLICKS_ADD_POST = 'CLICKS__ADD-POST';
const UPDATE_TEXT_MESSAGES = 'UPDATE_TEXT_MESSAGES';
const CLICK_SEND_MESSAGES = 'CLICK_SEND_MESSAGE';



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
        if (action.type === CLICKS_ADD_POST) {
            let postObject = { id: 1, post: this._state.profilePage.newPostText };
            this._state.profilePage.postData.unshift(postObject);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_TEXT_ADD_POST) {
            this._state.profilePage.newPostText = action.text;
            this._rerenderEntireTree(this._state);
        } else if (action.type === CLICK_SEND_MESSAGES) {
            let mesObject = { id: 1, name: 'Nikita', message: this._state.messagesPage.newMessages };
            this._state.messagesPage.messagesData.push(mesObject);
            this._state.messagesPage.newMessages = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_TEXT_MESSAGES) {
            this._state.messagesPage.newMessages = action.text;
            this._rerenderEntireTree(this._state);
        }
    }
};

export const updateTextCreateAction = (text) => ({ type: UPDATE_TEXT_ADD_POST, text: text })
export const clickCreateAction = () => ({ type: CLICKS_ADD_POST });
export const updateTextMessageCreateAction = (text) => ({ type: UPDATE_TEXT_MESSAGES, text: text })
export const clickMessageCreateAction = () => ({ type: CLICK_SEND_MESSAGES });

export default store;