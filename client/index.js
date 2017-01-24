import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Routes from './routes';

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState);

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <Routes />
        </Provider>,
        document.getElementById('root')
    );
};

render();
