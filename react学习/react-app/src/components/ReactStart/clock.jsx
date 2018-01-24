/*Created by fjl on 2018/1/19*/
import React, {Component} from 'react';

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
      name: 'fjl'
    }
  };
  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
            <div className="Clock">
              <h1>Hello Clock</h1>
              <h2>It is {this.state.date.toLocaleTimeString()} my name is {this.state.name}</h2>

            </div>
    );
  }
}

export default Clock;

