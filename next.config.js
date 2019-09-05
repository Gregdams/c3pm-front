const withCSS = require('@zeit/next-css');

const nextConfig = {
  env: {
    API_BASE_URL: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
  },
};

module.exports = withCSS(nextConfig);
