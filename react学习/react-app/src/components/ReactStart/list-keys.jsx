/*Created by fjl on 2018/1/20*/
import React, { Component } from 'react';

class ListKeys extends Component {
  constructor (props) {
    super(props);
    this.numbers = [1,2,3,4,5,6,7,8,9];
  }
  render() {
     let numberItems = this.numbers.map((item) => {
      if (item % 2) {
       return <h3 key={item}>{item}</h3>
      }
      return <h4 key={item}>{item}</h4>
    })
    return (
            <div class="list-keys">
              <ul>{numberItems}</ul>
            </div>
    );
  }
}

export default ListKeys;
