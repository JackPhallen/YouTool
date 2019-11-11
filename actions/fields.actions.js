import {FIELDS_FETCHING, FIELDS_SUCCESS, FIELDS_FAIL, FIELDS_SET} from "../constants/ActionTypes";
import {fetchContent} from "../utils/NetworkUtils";
import {getFieldsURL} from "../utils/PathUtils";
import {parseStreamFields} from "../utils/ParseUtils";

function _onSuccess(fields) {
    return function(dispatch, getState) {
        dispatch(actions$fieldsSet( parseStreamFields(fields.acf) ));
        dispatch(actions$fieldsSuccess());
    }
}

function _onFail() {
    return function(dispatch, getState) {
        dispatch(actions$fieldsFail());
    }
}

export function actions$fieldsFetch(post) {
    return function(dispatch, getState) {
        let url = getFieldsURL(post);
        dispatch(actions$fieldsFetching());
        dispatch(fetchContent(url, _onSuccess, _onFail));
    }
}

export function actions$fieldsFetching() {
    return({
        type: FIELDS_FETCHING,
    });
}

export function actions$fieldsSuccess() {
    return({
        type: FIELDS_SUCCESS
    });
}

export function actions$fieldsFail() {
    return({
        type: FIELDS_FAIL
    });
}

export function actions$fieldsSet(fields) {
    return({
        type: FIELDS_SET,
        fields: fields
    });
}