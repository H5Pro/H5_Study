/*Created by fjl on 2018/1/21*/
import React, {Component} from 'react';
import CustomHashRouter from './CustomHashRouter'
import ReactRouterStart from './ReactRouterStart'
class Index extends Component {
  render() {
    return (
            <div class="index">
              {/*<CustomHashRouter/>*/}
              <ReactRouterStart/>
            </div>
    );
  }
}

export default Index;
