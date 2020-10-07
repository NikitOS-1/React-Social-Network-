const UPDATE_TEXT_MESSAGES = 'UPDATE_TEXT_MESSAGES';
const CLICK_SEND_MESSAGES = 'CLICK_SEND_MESSAGE';

let initialState = {
    messagesData: [
        { id: 1, name: 'Nikita', message: 'hello' },
        { id: 1, name: 'Nikita', message: 'hello' },
        { id: 1, name: 'Nikita', message: 'hello' },
        { id: 1, name: 'Nikita', message: 'hello' }
    ],
    newMessages: ''
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_SEND_MESSAGES:
            let mesObject = { id: 1, name: 'Nikita', message: state.newMessages };
            state.messagesData.push(mesObject);
            state.newMessages = '';
            return state;
        case UPDATE_TEXT_MESSAGES:
            state.newMessages = action.text;
            return state;
        default:
            return state;
    }
};

export const updateTextMessageCreateAction = (text) => ({ type: UPDATE_TEXT_MESSAGES, text: text })
export const clickMessageCreateAction = () => ({ type: CLICK_SEND_MESSAGES });

export default messagesPageReducer;