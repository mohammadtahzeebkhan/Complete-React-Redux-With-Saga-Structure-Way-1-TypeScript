import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Define the root state type based on the rootReducer
type RootState = ReturnType<typeof rootReducer>;

// First, create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Enable Redux Devtools which helps developers understand Redux via UI format
const devtool = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Now create the global store with the rootReducer and applyMiddleware
const store = createStore(rootReducer, devtool(applyMiddleware(sagaMiddleware)));

// Run the rootSaga to start listening to actions
sagaMiddleware.run(rootSaga);

export default store;

// Now you can use this store in your application and connect components with it using react-redux.
