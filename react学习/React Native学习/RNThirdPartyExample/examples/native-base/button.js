/**
 * Created by fjl on 2018/4/22
 */
import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet, Image} from 'react-native'
import {Button} from 'native-base'
const coin = [
  {
    title: 'BTC',
    icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523768044686&di=897c504b8804a64ce6ebd6a8c781a347&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F16%2F33%2F59q58PICk5w_1024.jpg',
    value: 1
  },
  {
    title: 'ATC',
    icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523768044686&di=897c504b8804a64ce6ebd6a8c781a347&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F16%2F33%2F59q58PICk5w_1024.jpg',
    value: 2
  },
  {
    title: 'BTC',
    icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523768044686&di=897c504b8804a64ce6ebd6a8c781a347&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F16%2F33%2F59q58PICk5w_1024.jpg',
    value: 1
  }
]
class ButtonExample extends Component {
  render() {
    return (
      <View>
        <FlatList
          style={styles.add_home_market_assets_bind_list}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <View style={[styles.add_home_market_assets_bind_item_container]}>
              <View style={[styles.add_home_market_assets_bind_item_market_container]}>
                <Image source={{uri: item.icon}} style={styles.add_home_market_assets_bind_item_market_icon} />
                <Text style={styles.add_home_market_assets_bind_item_market_name}>
                  OMG
                </Text>
              </View>
              <Button
                // bordered
                // style={styles.add_home_market_assets_bind_item_bind_button}
                onPress={() => {
                  console.log('1111111')
                }}
              >
                <Text style={styles.add_home_market_assets_bind_item_bind_button_text}>绑定</Text>
              </Button>
            </View>
          }
          keyExtractor={(item, index) => {
            return '' + index
          }}
          data={coin}
          ItemSeparatorComponent={() => <View style={styles.long_press_popup_menu_item_separator}/>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  add_home_market_assets_bind_container: {
    backgroundColor: 'transparent'
  },
  add_home_market_assets_bind_alert: {
    fontSize: 13,
    color: '#999',
    marginHorizontal: 10,
    marginVertical: 13,
    textAlign: 'center'
  },
  add_home_market_assets_bind_list_container: {
    backgroundColor: '#fff'
  },
  add_home_market_assets_bind_list_header: {
    marginHorizontal: 10,
    marginTop: 15,
    color: '#999',
    fontSize: 13
  },
  add_home_market_assets_bind_list: {

  },
  add_home_market_assets_bind_item_container: {
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  add_home_market_assets_bind_item_market_container: {
    marginLeft: 10
  },
  add_home_market_assets_bind_item_market_icon: {
    marginRight: 15,
    width: 20,
    height: 20,
    borderRadius: 10
  },
  add_home_market_assets_bind_item_market_name: {
    color: '#999',
    fontSize: 14
  },
  add_home_market_assets_bind_item_bind_button: {
    height: 25,
    width: 60,
    borderColor: 'red',
    marginRight: 30
  },
  add_home_market_assets_bind_item_bind_button_text: {
    color: 'red',
    fontSize: 13
  }
})
export default ButtonExample
