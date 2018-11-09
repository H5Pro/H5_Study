/**
 * Created by fjl on 2017/6/28.
 */
/*import _ from 'lodash';
import style from './style.css';
import icon from './icon.png';
import data from './citys.xml';*/
var _ = require('lodash');
var icon = require('./icon.png');
var data = require('./citys.xml');
require('./style.css');

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['nihao', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);
    console.log(JSON.stringify(data));
    return element;
}


document.body.appendChild(component());
