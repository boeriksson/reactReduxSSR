import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import clientApp from './client/reducers'
import { renderToString } from 'react-dom/server';
import Routes from './client/routes.js';


const app = Express();
const port = 8080;

// This is fired every time the server side receives a request
app.use(Express.static('static'));
//app.get('/', handleRender);

app.get('*', (req, res) => {
    match({ routes: Routes, location: req.url }, (err, redirect, props) => {
        const store = createStore(clientApp);
        const html = renderToString(
            <Provider store={store}>
                <RouterContext { ...props}/>
            </Provider>
        );
        const preloadedState = store.getState();

        res.set('Content-Type', 'text/html');
        res.send(renderFullPage(html, preloadedState));
    });
});

/*
// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    const store = createStore(clientApp);

    //const html = '', preloadedState = {};

    const html = renderToString(
        <Provider store={store}>
            <Routes />
        </Provider>
    );

    const preloadedState = store.getState();

    res.set('Content-Type', 'text/html');
    res.send(renderFullPage(html, preloadedState));
}
*/

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
            <script src="manifest.js"></script>
            <script src="vendor.js"></script>
            <script src="approot.js"></script>
          </body>
        </html>
        `;
}

app.listen(port)