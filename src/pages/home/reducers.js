import { ADD_TODO, LIKE_TODO, DELETE_TODO } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Todo 1',
            liked: false
        }
    ],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const todos = state.todos;
            if (!action.error) {
                todos.push({ id: action.id, name: action.name, liked: false});
            }

            const obj = Object.assign({}, state, {
                error: action.error,
                todos
            });

            return obj;

        case LIKE_TODO:
            const idx = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[idx].liked = !state.todos[idx].liked;

            return Object.assign({}, state, { todos: state.todos });

        case DELETE_TODO:
            const filteredTodos = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({}, state, { todos: filteredTodos });
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
