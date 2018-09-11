/**
 * Created by fjl on 2018/4/14
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import BmSearchPicker from '../../RNThirdPartyExample/components/BmSearchPicker'
import Icon from 'react-native-vector-icons/FontAwesome'
const data = [
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
  },
  {
    title: 'ATC',
    icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523768044686&di=897c504b8804a64ce6ebd6a8c781a347&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F16%2F33%2F59q58PICk5w_1024.jpg',
    value: 2
  },
]
class BmSearchPickerDemo extends Component {
  constructor (props) {
    super(props)
    this.state= {
      selectedItem: (data && data.length > 0) ? data[0] : {},
      value: 1,
    }
  }
  render() {
    let {value: selectedValue = '', title: selectedLabel = ''}= this.state.selectedItem
    return (
      <View style={{marginTop: 20}}>
        <Icon name="rocket" size={30} color={'#123'} />
        <Text style={{fontSize: 20, padding: 10}}>默认</Text>
        <BmSearchPicker
          selectedValue={this.state.value}
          onValueChange={(value) => {
            this.setState({value})
          }}
          searchKey={'title'}
          labelKey={'title'}
          data={data}
        >
        </BmSearchPicker>
        <Text style={{fontSize: 20, padding: 10}}>自定义</Text>
        <BmSearchPicker
          selectedValue={selectedValue}
          onSelect={({item}) => {
            this.setState({selectedItem: item})
          }}
          searchKey={'title'}
          renderItem={({item}) =>{
            return  (<View style={{backgroundColor: 'red', height: 40}}>
              <Text>{item.title}</Text>
              <Text>{item.summary}</Text>
            </View>)
          }
          }
          data={data}
        >
          <View><Text>{selectedLabel}</Text></View>
        </BmSearchPicker>
      </View>
    );
  }
}

export default BmSearchPickerDemo
