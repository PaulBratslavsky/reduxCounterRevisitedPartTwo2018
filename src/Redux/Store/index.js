import {createStore} from 'redux';

const initialState = {
    count: 666
}

const reducer = (state = initialState, action) => {
    console.log('This is from reducer', action);

    switch (action.type) {
        case 'INCREMENT':
            // Always return a new object - best way to use Object.assign()
            return Object.assign({}, state, { count: state.count + 1 });

        case 'DECREMENT':
            return Object.assign({}, state, { count: state.count - 1 });

        case 'RESET':
            return Object.assign({}, state, { count: state.count = 666 });
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
