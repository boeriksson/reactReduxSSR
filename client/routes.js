import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import RootCtx from './components/RootCtx.jsx';
import About from './components/modules/About.jsx';
import Repos from './components/modules/Repos.jsx';

const routes = () => (
    <Router history={ browserHistory  }>
        <Route path='/' component={ RootCtx }>
            <Route path='/about' component={ About }/>
            <Route path='/repos' component={ Repos }/>
        </Route>
    </Router>
);

export default routes;