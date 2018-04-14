import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import BmSearchPickerModal from './BmSearchPickerModal'
class BmSearchPicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectItem: null
    }
  }
  render() {
    let {
      // 属性
      labelKey,       // 显示的主要文字
      valueKey,       // 选中的值
      searchKey,      // 查询字段
      iconKey,        // 图标字段
      summaryKey,     // 显示的次要文字
      data,           // 要渲染的数据
      selectedValue,  // 当前选中的值
      renderItem,     // 自定义列表项   (该属性存在时，默认的列表项将被覆盖)
      children,       // 自定义显示内容 (该属性存在时，选择器的默认呈现将被覆盖)
      // 回调函数
      onValueChange,  // 值改变触发该方法
      onSelect,       // 选择事件的回调
    } = this.props
    labelKey = labelKey || 'label'
    valueKey = valueKey || 'value'
    searchKey = searchKey || labelKey
    iconKey = iconKey || 'icon'
    summaryKey = summaryKey || 'summary'

    if (selectedValue && data) {
      for (var i = 0; i < data.length; i++) {
        var obj = data[i]
        if (obj[valueKey] === selectedValue) {
          this.state.selectItem = obj
          break
        }
      }
    }

    return (
      <BmSearchPickerModal
        data={data}
        value={this.state.selectItem}
        onSelect={(target) => {
          let {item} = target
          if (onSelect && typeof onSelect === 'function') {
            this.props.onSelect(target)
          }
          if (onValueChange && typeof onValueChange === 'function') {
            onValueChange(item[valueKey])
          }
        }}
        searchKey={searchKey}
        renderItem={
          renderItem ||
          (({item}) => {
            return(
              <View style={styles.bm_search_picker_item}>
                <View style={styles.bm_search_picker_item_main}>
                  {
                    item[iconKey] &&
                    <Image resource={item[iconKey]} />
                  }
                  <Text style={styles.bm_search_picker_item_title}>{item[labelKey]}</Text>
                </View>
                <Text style={styles.bm_search_picker_item_summary}>{item[summaryKey]}</Text>
              </View>
            )
        })}
      >
        {
          children || <View style={{width: 100, height: 50, backgroundColor: 'blue'}}>
            <Text>{this.state.selectItem ? this.state.selectItem[labelKey] : ''}</Text>
          </View>
        }
      </BmSearchPickerModal>
    )
  }
}

const styles = StyleSheet.create({
  bm_search_picker_item: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  bm_search_picker_item_main: {

  },
  bm_search_picker_item_title: {
    fontSize: 16
  },
  bm_search_picker_item_summary: {
    fontSize: 14
  },
  bm_search_picker_item_icon: {

  },
  bm_search_picker_item_checked: {

  }
})

export default BmSearchPicker
