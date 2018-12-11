import  { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

function _getMiddleware() {
    const middleware = [
        thunk
    ];

    return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
    const store = compose(
        _getMiddleware()
    )(createStore)(rootReducer, initialState);

    return store;
}
