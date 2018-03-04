/*Created by fjl on 2018/1/27*/
import React, {Component} from 'react';

class Counter extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
            <div class="counter">
              <h1>{this.props.value}</h1>
              <button onClick={this.props.onIncrement}>+</button>
              <button onClick={this.props.onDecrement}>-</button>
            </div>
    );
  }
}

export default Counter;
