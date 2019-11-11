import {TAGS_FETCHING, TAGS_SUCCESS, TAGS_FAIL, TAGS_SET} from "../constants/ActionTypes";
import {fetchContent} from "../utils/NetworkUtils";
import {getTagsUrl} from "../utils/PathUtils";

function _onSuccess(tags) {
    return function(dispatch, getState) {
        // console.log(tags)
        dispatch(actions$tagsSet(tags));
        dispatch(actions$tagsSuccess());
    }
}

function _onFail() {
    return function(dispatch, getState) {
        dispatch(actions$tagsFail());
    }
}

export function actions$tagsFetch() {
    return function(dispatch, getState) {
        let url = getTagsUrl();
        dispatch(actions$tagsFetching());
        dispatch(fetchContent(url, _onSuccess, _onFail));
    }
}

export function actions$tagsFetching() {
    return({
        type: TAGS_FETCHING,
    });
}

export function actions$tagsSuccess() {
    return({
        type: TAGS_SUCCESS
    });
}

export function actions$tagsFail() {
    return({
        type: TAGS_FAIL
    });
}

export function actions$tagsSet(tags) {
    return({
        type: TAGS_SET,
        tags: tags
    });
}