/*Created by fjl on 2018/1/21*/
import React from 'react'
import { Router } from 'react-router'
import App from './App'
import About from './components/ReactRouter/ReactRouterStart/about'
import Inbox from './components/ReactRouter/ReactRouterStart/inbox'
import Home from './components/ReactRouter/ReactRouterStart/Home/home'
const router =
        (<Router>
          <Route path="/" component={App}>
            <Route path="about" component={About}></Route>
            <Route path="inbox" component={Inbox}></Route>
            <Route path="home" component={Home}></Route>
          </Route>
        </Router>)
export default router