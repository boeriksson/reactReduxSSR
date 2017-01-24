import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import clientApp from './client/reducers'
import RootCtx from './client/components/RootCtx.jsx';
import { renderToString } from 'react-dom/server';


const app = Express();
const port = 8080;

// This is fired every time the server side receives a request
app.use(Express.static('static'));
app.get('/', handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    const store = createStore(clientApp);

    const html = renderToString(
        <Provider store={store}>
            <RootCtx />
        </Provider>
    );

    const preloadedState = store.getState();
    res.set('Content-Type', 'text/html');
    res.send(renderFullPage(html, preloadedState));

}

function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
          <head>
            <title>Redux Universal Example</title>
          </head>
          <body>
            <div id="root">${html}</div>
            <script>
              // WARNING: See the following for Security isues with this approach:
              // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
            </script>
            <script src="bundle.js"></script>
          </body>
        </html>
        `;
}

app.listen(port)