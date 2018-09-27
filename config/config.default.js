'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538036182307_3293';

  config.middleware = ['prisma'];

  // add your config here
  config.SERVERS = {
    PRISMA: '127.0.0.1:4000'
  };

  return config;
};
