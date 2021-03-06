/*
* react-native 搜索组件
* */
import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'
import SearchBar from 'react-native-search-bar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: 'center',
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    backgroundColor: '#fff',
  },
})

const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets']

export default class App extends Component<{}, { search: string }> {
  state = {
    search: '',
  }

  search1: SearchBar
  search2: SearchBar

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Text style={styles.header}>Dark Style</Text>
          <SearchBar
            ref={ref => (this.search1 = ref)}
            barStyle="black"
            onSearchButtonPress={() => this.search1.blur()}
          />

          <Text style={styles.header}>Search Example</Text>
          <SearchBar
            // barTintColor={'#d6d6d6'}
            barStyle={'default'}
            searchBarStyle={'minimal'}
            textColor={'green'}
            autoCapitalize={'none'}
            // tintColor={'yellow'}
            // textFieldBackgroundColor={'red'}
            text={this.state.search}
            ref={ref => (this.search2 = ref)}
            onChange={e => console.log(e.nativeEvent)}
            placeholder={'搜索'}
            cancelButtonText={' 取消 '}
            onChangeText={search => this.setState({ search })}
            onSearchButtonPress={() => this.search2.blur()}
          />

          {items
            .filter(a => a.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
            .map(a => (
              <Text style={styles.listItem} key={a}>
                {a}
              </Text>
            ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
