'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reducers = require('../client/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _RootCtx = require('../client/components/RootCtx.jsx');

var _RootCtx2 = _interopRequireDefault(_RootCtx);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 8080;

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  var store = (0, _redux.createStore)(_reducers2.default);

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_RootCtx2.default, null)
  ));

  var preloadedState = store.getState();
  res.set('Content-Type', 'text/html');
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return '\n        <!doctype html>\n        <html>\n          <head>\n            <title>Redux Universal Example</title>\n          </head>\n          <body>\n            <div id="root">' + html + '</div>\n            <script>\n              // WARNING: See the following for Security isues with this approach:\n              // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n              window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState) + '\n            </script>\n            <script src="/static/bundle.js"></script>\n          </body>\n        </html>\n        ';
}

app.listen(port);