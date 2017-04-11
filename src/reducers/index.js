import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
    router: routerReducer,
    posts: PostsReducer
});

export default rootReducer;
