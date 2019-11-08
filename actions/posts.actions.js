import {POST_FETCHING, POST_SUCCESS, POST_FAIL, POST_APPEND} from "../constants/ActionTypes";


export function actions$postsFetching() {
    return({
        type: POST_FETCHING
    });
}

export function actions$fetchPosts() {
    return function(dispatch, getState) {
        dispatch(actions$postsFetching());
        dispatch()
    }
}