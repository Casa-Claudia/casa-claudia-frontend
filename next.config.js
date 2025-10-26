
module.exports = {
  env: {
    // These env vars are read from NEXT_PUBLIC_ prefixed vars and exposed as non-prefixed
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    API_PATH: process.env.API_PATH,
  },
};

