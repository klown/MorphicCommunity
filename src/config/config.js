const ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'LOCAL'

const CONF = {
  LOCAL: {
    BACKEND_URL: 'http://localhost:5002'
  },
  DEVELOPMENT: {
    BACKEND_URL: 'http://localhost:5002'
  },
  PRODUCTION: {
    BACKEND_URL: 'https://dev-morphic.morphiclite-oregondesignservices.org'
  }
}

export const CONFIG = CONF[ENV]
