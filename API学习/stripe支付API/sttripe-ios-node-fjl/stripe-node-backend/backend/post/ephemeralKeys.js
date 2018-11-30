/**
 * Created by fjl on 2018/11/23
 */

const stripe = require('stripe')('sk_test_m1g7bfig1qfA0th6kyOBl1vV');
function ephemeralKeys (req, res) {
  const {customerId, stripe_version} = req.body
  if (!stripe_version) {
    res.status(200).json({
      code: 1,
      msg: 'you lose stripe_version',
      data: {}
    })
    return;
  }
  stripe.ephemeralKeys.create(
    {customer: customerId},
    {stripe_version}
  ).then((key) => {
    res.status(200).json({
      code: 0,
      msg: '',
      data: key,
    });
  }).catch((err) => {
    res.status(200).json({
      code: 2,
      msg: err.message,
      data: err,
    });
  });
}
module.exports = ephemeralKeys;
