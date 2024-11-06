import { combineReducers } from 'redux';
import postSlice from '../features/post.slice';

const rootReducer = combineReducers({
    post: postSlice,
});

export default rootReducer;
