/*Created by fjl on 2018/1/2*/
import React, {Component} from 'react';
import {StyleSheet, SectionList, FlatList, Text} from 'react-native';

class MyFlatList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listData: [
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'}
      ],
      sectionData: [
        {title: 'D', data: ['Devin']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      ]
    }
  }
  render()
  {
    let listData = this.state.listData;
    let sectionData = this.state.sectionData;
    return (
            /*<FlatList
                   data={listData}
                   renderItem={({item}) => {
                     return <Text style={styles.item}>{item.key}</Text>
                   }}
            >
            </FlatList>
            */
            <SectionList
                    sections={sectionData}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            >
            </SectionList>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default MyFlatList;
