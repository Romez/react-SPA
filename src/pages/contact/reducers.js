import { ADD_TEXT } from './actions';

const initialState = {
    info: '',
    value: '',
    error: ''
};

function contactReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TEXT:
            let info = state.info;
            if (!action.error) {
                info = action.value;
            }

            return Object.assign({}, state, {
                error: action.error,
                info
            });
        default:
            return state;
    }
}

const ContactReducer = {
    contact: contactReducer
};

export default ContactReducer;
