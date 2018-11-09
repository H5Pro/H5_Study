/**
 * Created by fjl on 2017/6/29.
 */

/*import _ from 'lodash';
 import style from './style.css';
 import icon from './icon.png';
 import data from './citys.xml';*/
var _ = require('lodash');
var back = require('./back.jpg');
var data = require('./citys.xml');
require('./style.css');
require('./css.less')

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['nihao', 'world'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = back;
    element.appendChild(myIcon);
    console.log(data);
    return element;
}


document.body.appendChild(component());
