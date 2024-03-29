import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { appReducers } from './reducers/app-reducers';

const reducers = combineReducers({
	app: appReducers,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk)),
);
