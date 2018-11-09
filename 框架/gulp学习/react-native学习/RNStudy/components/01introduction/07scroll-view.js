/*Created by fjl on 2018/1/2*/

import React, {Component} from 'react';
import {Text, ScrollView, Image} from 'react-native';

class MyScrollView extends Component {
  render()
  {
    return (
            <ScrollView>
              <Text style={{fontSize: 96}}>Scroll me plz</Text>
              <Image source={require('../../image/aaa.jpg')}></Image>
              <Image source={require('../../image/aaa.jpg')}></Image>
              <Image source={require('../../image/aaa.jpg')}></Image>
              <Image source={require('../../image/aaa.jpg')}></Image>
              <Image source={require('../../image/aaa.jpg')}></Image>
              <Text style={{fontSize: 96}}>if you like</Text>
              <Image source={require('../../image/bbb.jpg')}></Image>
              <Image source={require('../../image/bbb.jpg')}></Image>
              <Image source={require('../../image/bbb.jpg')}></Image>
              <Image source={require('../../image/bbb.jpg')}></Image>
              <Image source={require('../../image/bbb.jpg')}></Image>
              <Text style={{fontSize: 96}}>Scroll down</Text>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Text style={{fontSize: 96}}>what`s the best</Text>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>
              <Image source={require('../../image/ccc.jpg')}></Image>

            </ScrollView>
    );
  }
}

export default MyScrollView;
