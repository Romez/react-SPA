export const ADD_TEXT = 'ADD_TEXT';

export function addText(value) {
    let error = '';
    if (!value) {
        error = 'Следует заполнить';
    }

    return {
        type: ADD_TEXT,
        value,
        info: value,
        error
    };
}
