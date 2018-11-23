/**
 * Created by fjl on 2018/11/23
 */
const post = require('./post');
const backend = (app) => {
  post(app);
}
module.exports = backend;
