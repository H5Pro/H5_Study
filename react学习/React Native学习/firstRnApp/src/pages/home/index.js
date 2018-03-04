/* Created by fjl on 2018/2/2 */
import React, {Component, PureComponent} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native'
import StatusBar from '../../components/StatusBar'
import {px2dp} from '../../utils/demensions'

class Header extends PureComponent {
  render() {
    return (
      <ImageBackground
        style={styles.header}
        source={require('../../assets/images/home-header-bg.png')}
      >
        <View style={styles.headerContentWrap}>
          <Text style={[styles.headerTitle, styles.headerTitleTop]}>总资产(CNY)</Text>
          <Text style={styles.headerTitle}>777,000.00</Text>
        </View>
        <ImageBackground
          style={styles.headerAdd}
          source={require('../../assets/images/home-header-add.png')}
        />
        <View style={styles.exchange}>
          <Text style={styles.exchangeText}>交易所</Text>
          <Image
            style={styles.exchangeArrow}
            source={require('../../assets/images/home-header-arrow.png')}
          />
        </View>
      </ImageBackground>
    )
  }
}

class ListItem extends PureComponent {
  render() {
    return (
      <View style={styles.listWrap}>
        <View style={styles.listLeft}>
          <Image
            style={styles.listLogo}
            source={require('../../assets/images/货币1.png')}
          />
        </View>
        <View style={styles.listRight}>
          <View style={[styles.listRightTop, styles.listRightTextWrap]}>
            <Text style={[styles.listRightTopText, styles.listRightText]}>BTC</Text>
            <Text style={[styles.listRightTopText, styles.listRightText]}>3,000.3</Text>
          </View>
          <View style={[styles.listRightBottom, styles.listRightTextWrap]}>
            <Text style={[styles.listRightBottomText, styles.listRightText]}>≈1.15CNY</Text>
            <Text style={[styles.listRightBottomText, styles.listRightText]}>66,000.00</Text>
          </View>
        </View>
      </View>
    )
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({navigation}) => ({
    header: <StatusBar/>
  })

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ScrollView sryle={styles.scrollView}>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: px2dp(375),
    height: px2dp(217)
  },
  headerContentWrap: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  headerTextWrap: {},
  headerTitle: {
    color: '#fff',
    fontSize: 20
  },
  headerTitleTop: {
    marginBottom: px2dp(30)
  },
  headerAdd: {
    width: px2dp(20),
    height: px2dp(20),
    position: 'absolute',
    right: px2dp(10),
    top: px2dp(34)
  },
  exchange: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: px2dp(11),
    bottom: px2dp(25)
  },
  exchangeText: {
    color: 'rgb(107,67,28)',
    marginRight: px2dp(9)
  },
  exchangeArrow: {
    height: px2dp(14),
    width: px2dp(14),
    resizeMode: 'contain'
  },
  scrollView: {
    flex: 1
  },
  listWrap: {
    height: px2dp(67),
    borderBottomWidth: 1,
    borderColor: 'rgb(222,222,222)',
    flexDirection: 'row'

  },
  listLeft: {
    height: '100%',
    width: px2dp(50),
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  listRight: {
    height: '100%',
    flex: 1
    // backgroundColor: 'red',
  },
  listLogo: {
    width: px2dp(40),
    height: px2dp(40)
  },
  listRightTextWrap: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingLeft: px2dp(16),
    paddingRight: px2dp(10)
  },
  listRightTop: {
    // backgroundColor: 'green',
  },
  listRightBottom: {
    // backgroundColor: 'yellow',
  },
  listRightTopText: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold'
  },
  listRightBottomText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 12,
    color: '#999999'
  }
})

export default HomePage
