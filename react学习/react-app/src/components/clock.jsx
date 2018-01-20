/*Created by fjl on 2018/1/19*/
import React, {Component} from 'react';

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date()
    }
  };
  componentDidMount () {
    setInterval(() => {
      this.state.date = new Date();
      console.log(this.state.date)
    }, 1000)
  }
  render() {
    return (
            <div className="Clock">
              <h1>Hello Clock</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
    );
  }
}

export default Clock;

