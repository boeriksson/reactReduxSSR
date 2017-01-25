import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import RootCtx from './components/RootCtx.jsx';

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

const routes = {
    path: '/',
    component: RootCtx,
    childRoutes: [
        {
            path: '/about',
            getComponent(location, cb) {
                System.import('components/modules/About.jsx')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: '/repos',
            getComponent(location, cb) {
                System.import('components/modules/Repos.jsx')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    ]
};

export default () => <Router history={ browserHistory } routes={ routes } />;