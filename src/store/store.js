import thunkMiddleware from 'redux-thunk';
import { 
    createStore,
    applyMiddleware
} from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

function configureStore(preloadedState) {

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}

export default {
    configureStore
}


// const store = () => createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default {
//     store
// };
