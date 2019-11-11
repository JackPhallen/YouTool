import {POSTS_FETCHING, POSTS_SUCCESS, POSTS_FAIL, POSTS_SET} from "../constants/ActionTypes";
import {fetchContent} from "../utils/NetworkUtils";
import {getPostURL} from "../utils/PathUtils";

function _onSuccess(posts) {
    return function(dispatch, getState) {
        // console.log(posts)
        dispatch(actions$postsSet(posts));
        dispatch(actions$postsSuccess());
    }
}

function _onFail() {
    return function(dispatch, getState) {
        dispatch(actions$postsFail());
    }
}

export function actions$postsFetch(tags) {
    return function(dispatch, getState) {
        let url = getPostURL(tags);
        dispatch(actions$postsFetching());
        dispatch(fetchContent(url, _onSuccess, _onFail));
    }
}

export function actions$postsFetching() {
    return({
        type: POSTS_FETCHING,
    });
}

export function actions$postsSuccess() {
    return({
        type: POSTS_SUCCESS
    });
}

export function actions$postsFail() {
    return({
        type: POSTS_FAIL
    });
}

export function actions$postsSet(posts) {
    return({
        type: POSTS_SET,
        posts: posts
    });
}