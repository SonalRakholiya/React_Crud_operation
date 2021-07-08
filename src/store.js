import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { taskReducer } from "./Reducer/taskReducer";
const persistConfig = {
    key: 'root',
    storage,
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, taskReducer)
export let store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))
export let persistor = persistStore(store)


