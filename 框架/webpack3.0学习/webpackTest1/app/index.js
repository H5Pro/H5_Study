/**
 * Created by fjl on 2017/6/29.
 */

var greeter = require('./Greeter.js');
var jsonData = require('./config.json');
document.getElementById('root').appendChild(greeter());
document.getElementById('root').innerHTML+=jsonData.greetText;