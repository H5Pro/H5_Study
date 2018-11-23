/**
 * Created by fjl on 2018/11/23
 */
const ephemeralKeys = require('./ephemeralKeys')
const post = (app) => {
  app.post('/ephemeral_keys', ephemeralKeys)
}
module.exports = post;
