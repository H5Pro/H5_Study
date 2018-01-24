/*Created by fjl on 2018/1/21*/
import React, {Component} from 'react';
import FirstComponent from './first-component';
import SecondComponent from './second-component'
import Clock from './clock'
import EventHandle from './event-handle'
import ListKeys from './list-keys'
import FormInput from './form-input'
class Index extends Component {
  render() {
    return (
            <div class="index">
              <EventHandle/>
              <ListKeys/>
              <FormInput/>
            </div>
    );
  }
}

export default Index;
