import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, View, Text } from 'native-base';
class TabsScrollableExample extends Component {
  render() {
    return (
        <Tabs renderTabBar={() => <ScrollableTab/>}>
          <Tab
            activeTabStyle={{borderColor: '#fff', backgroundColor: 'red'}}
            textStyle={{color: 'red'}}
            heading="Tab1"
            activeTextStyle={{color: '#222'}}
          >
            <View><Text>dd</Text></View>
          </Tab>
          <Tab textStyle={{color: 'red'}} heading="Tab2">
            <View><Text>dd</Text></View>
          </Tab>
        </Tabs>
    );
  }
}

export default TabsScrollableExample
