import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);


// export default createStore( rootReducer, applyMiddleware(thunk) );
