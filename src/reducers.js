import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home';
import { ContactReducer } from './pages/contact';
import { ListReducer } from './pages/list';
import { ModalReducer } from './components/modal';
import { VideoReducer } from './pages/video';

export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ContactReducer,
    ...ListReducer,
    ...ModalReducer,
    ...VideoReducer
});
