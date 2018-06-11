import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import * as counterActions from '../actions/counter';

export const history = createHashHistory();

export const configureStore = (initialState: any) => {
    // Redux Configuration
    const middleware = [];
    const enhancers = [];

    // Thunk Middleware
    middleware.push(thunk);

    // Logging Middleware
    const logger = createLogger({
        level: 'info',
        collapsed: true
    });

    // Skip redux logs in console during the tests
    if (process.env.NODE_ENV !== 'test') {
        middleware.push(logger);
    }

    // Router Middleware
    const router = routerMiddleware(history);
    middleware.push(router);

    // Redux DevTools Configuration
    const actionCreators = {
        ...counterActions,
        ...routerActions,
    };
    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
            actionCreators,
        })
        : compose;
    /* eslint-enable no-underscore-dangle */

    // Apply Middleware & Compose Enhancers
    enhancers.push(applyMiddleware(...middleware));
    const enhancer = composeEnhancers(...enhancers);

    // Create Store
    const store = createStore(rootReducer, initialState, enhancer);

    if ((<any>module).hot) {
        (<any>module).hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')));
    }

    return store;
};
