import {combineReducers} from 'redux';
import tagReducer from './tags.reducer';
import postReducer from './posts.reducer';
import fieldsReducer from './fields.reducer';


const rootReducer = combineReducers({
  posts: postReducer,
  tags: tagReducer,
  fields: fieldsReducer
});

export default rootReducer;