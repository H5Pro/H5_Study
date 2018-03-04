/* Created by fjl on 2018/2/2 */
import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { List, ListItem } from 'react-native-elements'
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

class ProfilePage extends Component {
  constructor (props) {
    super(props)
    console.log('qqqq')
  }
  render () {
    return (
      <List>
        <ListItem
          roundAvatar
          title='Limited supply! Its like digital gold!'
          subtitle={
            <View style={styles.subtitleView}>
              <Image source={require('../../assets/images/tabbar-home.png')} style={styles.ratingImage}/>
              <Text style={styles.ratingText}>5 months ago</Text>
            </View>
          }
          avatar={require('../../assets/images/tabbar-profile.png')}
          // hideChevron={true}
          rightTitle="dddd"
          rightIcon={{name: 'chevron-right'}}
        />
      </List>
    )
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})

export default ProfilePage
