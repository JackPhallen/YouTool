import {
    FIELDS_FETCHING,
    FIELDS_SUCCESS,
    FIELDS_FAIL,
    FIELDS_SET,
} from "../constants/ActionTypes";

const initState = {
    isFetching: false,
    isError: false,
    fields: [],
};

export default function (state = initState, action) {
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case FIELDS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case FIELDS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
            });
        case FIELDS_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isError: true
            });
        case FIELDS_SET:
            return Object.assign({}, {
                fields: action.fields
            });
        default:
            return state;
    }
}