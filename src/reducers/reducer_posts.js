import { FETCH_POSTS } from '../actions/index';

const initialState = {
    all: [],
    post: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            
        default:
        return state
    }
}