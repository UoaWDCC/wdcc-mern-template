const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  env: {
    HOST: process.env.HOST,
    MONGODB_URI: process.env.MONGODB_URI,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: 'openid profile',
    REDIRECT_URI:
      process.env.REDIRECT_URI || 'http://localhost:3141/api/callback',
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3141/',
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 72000 // 20 hours
  }
}
