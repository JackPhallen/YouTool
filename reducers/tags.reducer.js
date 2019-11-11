import {TAGS_FETCHING, TAGS_SUCCESS, TAGS_FAIL, TAGS_SET} from "../constants/ActionTypes";

const initState = {
    isFetching: false,
    isError: false,
    tags: [],
};

export default function (state = initState, action) {
    if ( !state ) {
        state = initState;
    }
    switch (action.type) {
        case TAGS_FETCHING:
            return Object.assign( {}, state, {
                isFetching: true,
            });
        case TAGS_SUCCESS:
            return Object.assign( {}, state, {
                isFetching: false,
                isError: false,
            });
        case TAGS_FAIL:
            return Object.assign( {}, state, {
                isFetching: false,
                isError: true
            });
        case TAGS_SET:
            return Object.assign( {}, {
                tags: action.tags
            });
        default:
            return state;
    }
}