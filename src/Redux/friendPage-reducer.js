let initialState = {
    user: [
        { id: 1, name: 'Nikita' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Ira' },
        { id: 4, name: 'Dima' },
        { id: 5, name: 'Vitya' },
        { id: 6, name: 'Vasya' }
    ]
};

const friendPageReducer = (state = initialState, action) => {
    return state;
};

export default friendPageReducer;