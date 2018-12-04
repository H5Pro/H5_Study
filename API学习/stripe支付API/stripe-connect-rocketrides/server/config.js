'use strict';

module.exports = {
  // App name.
  appName: 'Rocket Rides',

  // Server port.
  port: 3000,

  // Secret for cookie sessions.
  secret: 'YOUR_SECRET',

  // Configuration for Stripe.
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Connect Settings: https://dashboard.stripe.com/account/applications/settings
  stripe: {
    secretKey: 'sk_test_m1g7bfig1qfA0th6kyOBl1vV',
    publishableKey: 'pk_test_O5N1418rxpxfcnHoklRxZvNJ',
    clientId: 'ca_E3W2Ak8SNrAGpaXJGxwPQjY6xpII7Liq',
    // todo: stripe Connect with Standard: url
    authorizeUri: 'https://connect.stripe.com/oauth/authorize', // 'https://connect.stripe.com/express/oauth/authorize',
    tokenUri: 'https://connect.stripe.com/oauth/token'
  },

  // Configuration for MongoDB.
  mongo: {
    uri: 'mongodb://localhost/rocketrides'
  },

  // Configuration for Google Cloud (only useful if you want to deploy to GCP).
  gcloud: {
    projectId: 'YOUR_PROJECT_ID'
  }
};
