import {
    POSTS_FETCHING,
    POSTS_SUCCESS,
    POSTS_FAIL,
    POSTS_SET,
} from "../constants/ActionTypes";

const initState = {
    isFetching: false,
    isError: false,
    posts: [],
};

export default function (state = initState, action) {
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case POSTS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case POSTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
            });
        case POSTS_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isError: true
            });
        case POSTS_SET:
            return Object.assign({}, {
                posts: action.posts
            });
        default:
            return state;
    }
}