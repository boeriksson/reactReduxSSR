import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers'
import RootCtx from './components/RootCtx.jsx'

const store = createStore(reducers);

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <div id="React context wrapper" className="outer-wrapper">
                <RootCtx/>
            </div>
        </Provider>,
        document.getElementById('root')
    );
};

render();
