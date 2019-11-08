import {POST_FETCHING, POST_SUCCESS, POST_FAIL, POST_APPEND} from "../constants/ActionTypes";

const initState = {
  isFetching: false,
  isError: false,
  posts: [],
};

export default function (state = initState, action) {
  if ( !state ) {
    state = initState;
  }
  switch (action.type) {
    case POST_FETCHING:
      return Object.assign( {}, state, {
        isFetching: true,
      });
    case POST_SUCCESS:
      return Object.assign( {}, state, {
        isFetching: false,
        isError: false,
      });
    case POST_FAIL:
      return Object.assign( {}, state, {
        isFetching: false,
        isError: true
      });
    case POST_APPEND:
      return Object.assign( {}, {
        posts: [
            ...state.posts,
            ...action.posts
        ]
      });
    default:
      return state;
  }
}