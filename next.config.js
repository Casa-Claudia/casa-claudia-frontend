const { parsed } = require('dotenv').config();

module.exports = {
  env: {
    GOOGLE_MAPS_API_KEY: parsed.GOOGLE_MAPS_API_KEY,
  },
};

