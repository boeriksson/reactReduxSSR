import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import RootCtx from './components/RootCtx.jsx';

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState);

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <RootCtx/>
        </Provider>,
        document.getElementById('root')
    );
};

render();
