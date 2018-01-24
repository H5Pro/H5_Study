/*Created by fjl on 2018/1/21*/
import React, {Component} from 'react';
import Home from './home'
import Inbox from './inbox'
import About from './about'
class CustomHashRouter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount () {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  render() {
    let Child = null
    switch (this.state.route) {
    case '/about' :
      Child = About
      break;
    case '/inbox' :
      Child = Inbox
      break;
    default:
      Child = Home
    }
    return (
            <div class="custom-hash-router">
              <ul>
                <li><a href="#/inbox">Inbox</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/">Home</a></li>
              </ul>
              <Child/>
            </div>
    );
  }
}

export default CustomHashRouter;
