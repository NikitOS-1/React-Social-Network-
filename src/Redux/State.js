import {rerenderEntireTree} from '../render';

let State = {
    ProfilePage: {
        PostData: [/*
            { id: 1, countLike: 98164, post: 'Hi this my dog' },
            { id: 2, countLike: 4521, post: 'i learn english ' },
            { id: 3, countLike: 1981, post: 'every day ' },
            { id: 4, countLike: 1764, post: 'tell me your offer' },
            { id: 5, countLike: 8184, post: 'i dont help them' },
            { id: 6, countLike: 144, post: 'i want dont worry' },
            { id: 7, countLike: 114, post: 'i like this language ' },
            { id: 8, countLike: 321, post: 'Java Script good language for newbie' },
            { id: 9, countLike: 131, post: 'helloy' },
            { id: 10, countLike: 124, post: 'special frase' },
            { id: 11, countLike: 154, post: 'why does she like this chanel' },
            { id: 12, countLike: 14984, post: 'what do you know intresting and useful' }
        */],
        newPostText : 'Hell11o'
    },
    MessagePage: {
        messagesData: [
            { id: 1, message: 'hey' },
            { id: 2, message: 'Yo' },
            { id: 3, message: 'who knows it' },
            { id: 4, message: 'switch' },
            { id: 5, message: 'how offen do you watch this code' },
            { id: 6, message: 'west coast customs' },
            { id: 1, message: 'hey' },
            { id: 2, message: 'Yo' },
            { id: 3, message: 'who knows it' },
            { id: 4, message: 'switch' },
            { id: 5, message: 'how offen do you watch this code' },
            { id: 6, message: 'west coast customs' }
        ],
        dialogsData: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Rima' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Sveta' },
            { id: 5, name: 'Vasya' },
            { id: 6, name: 'Valera' },
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Rima' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Sveta' },
            { id: 5, name: 'Vasya' },
            { id: 6, name: 'Valera' }
        ]
    },
    FriendPage: {
        friendsData: [
            { id: 1, name: 'Nikita' },
            { id: 1, name: 'Dima' },
            { id: 1, name: 'Ira' },
            { id: 1, name: 'Sasha' },
            { id: 1, name: 'Vitya' },
            { id: 1, name: 'Vasya' },
            { id: 1, name: 'Nikita' },
            { id: 1, name: 'Dima' },
            { id: 1, name: 'Ira' },
            { id: 1, name: 'Sasha' },
            { id: 1, name: 'Vitya' },
            { id: 1, name: 'Vasya' }
        ]
    }
};

export let addPost = () => {
    let newPost = {
        id:1,
        countLike:0,
        post: State.ProfilePage.newPostText
    };
    State.ProfilePage.PostData.push(newPost);
    State.ProfilePage.newPostText = '';
    rerenderEntireTree(State);
};
export let updateNewPostText = (newText) => {
    State.ProfilePage.newPostText = newText;
    rerenderEntireTree(State);
};

export default State;