/*Created by fjl on 2018/2/1*/
import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
class HomeDetailPage extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerRight = (
            <Button
            title="save"
            onPress={params.handleSave ? params.handleSave : () => null}
            />
    );
    if (params.isSaving) {
      headerRight = <ActivityIndicator/>;
    }
    return { headerRight, title: navigation.state.params.title };
  };
  _handleSave = () => {
    this.props.navigation.setParams({isSaving: true});
    setTimeout(() => {
      this.props.navigation.setParams({isSaving: false});
    }, 2000)
  }

  componentDidMount () {
    this.props.navigation.setParams({handleSave: this._handleSave})
  }
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Hello HomeDetailPage</Text>
            </View>
    );
  }
}

export default HomeDetailPage;
