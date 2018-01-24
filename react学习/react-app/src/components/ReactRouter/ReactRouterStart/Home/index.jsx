/*Created by fjl on 2018/1/21*/
import React, {Component} from 'react'
import PageOne from './page-one'
import PageTwo from './page-two'
import PageThree from './page-three'
import { Redirect, withRouter, HashRouter as Router, Route } from 'react-router-dom'
import {  } from 'react-router'
class Home extends Component {
  render() {
    let push = (path) => {
      console.log(Router)
      this.props.history.push(path)
    }
    return (
            <Router>
              <div>
                <div>
                  <button onClick={push.bind(this, '/home/page1')}>第一页</button>
                  <button onClick={push.bind(this, '/home/page2')}>第二页</button>
                  <button onClick={push.bind(this, '/home/page3')}>第三页</button>
                </div>
                <div>
                  <Redirect from="/home" to="/home/page1"></Redirect>
                  <Route path="/home/page1" component={PageOne}></Route>
                  <Route path="/home/page2" component={PageTwo}></Route>
                  <Route path="/home/page3" component={PageThree}></Route>
                </div>
              </div>
            </Router>
    );
  }
}

export default withRouter(Home);
