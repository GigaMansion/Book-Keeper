import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { LoginPanel } from './LoginPanel/LoginPanel'
import NotFoundPage from './components/NotFoundPage';



const routes = (
    <Route path='/' component={LoginPanel}>
        <IndexRoute component={LoginPanel}/>
        <Route path='*' component={NotFoundPage}/>
    </Route>
);

export default routes