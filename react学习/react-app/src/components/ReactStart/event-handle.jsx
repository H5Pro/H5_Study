/*Created by fjl on 2018/1/20*/
import React, {Component} from 'react';

class EventHandle extends Component {
  constructor (props) {
    super(props);
    this.handleClick = ((e, id) => {
      console.log(this)
      console.log(e)
      console.log(id)
    }).bind(this);
  }

  render() {
    return (
            <div class="event-handle">
              <h1>Hello EventHandle</h1>
              <button onClick={(e) => this.handleClick(e, 111)}>点击</button>
            </div>
    );
  }
  componentDidMount () {
    console.log(this)
  }
}

export default EventHandle;
