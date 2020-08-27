import { createStore } from 'redux';

const INITIAL_STATE = {
    data: {
        emailUsr: '',
        passwordUsr: '',
        name: '',
        surname: '',
        development: false,
        websites: false,
        createdAt: '',
        rememberUsr: false,
        successLogin: false
    }
}

function userData(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case 'REDIRECT_USER':
            return { ...state, data: action}
        default:
            return state;
    }
}

const store = createStore(userData);

export default store;