const UPDATE_TEXT_ADD_POST = 'UPDATE-TEXT__ADD-POST';
const CLICKS_ADD_POST = 'CLICKS__ADD-POST';

let initialState = {
    postData: [{ id: 1, post: 'hello' }],
    newPostText: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICKS_ADD_POST:
            let postObject = { id: 1, post: state.newPostText };
            state.postData.unshift(postObject);
            state.newPostText = '';
            return state;
        case UPDATE_TEXT_ADD_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};

export const updateTextCreateAction = (text) => ({ type: UPDATE_TEXT_ADD_POST, text: text })
export const clickCreateAction = () => ({ type: CLICKS_ADD_POST });

export default profilePageReducer;