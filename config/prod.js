'use strict';
const path = require('path');
const ROOT = `${__dirname}/..`;

module.exports = {

  dist:'/dist-prod',

  server: {
    port: 3000,
    host: 'localhost',
    root: path.normalize(ROOT),
    build: path.normalize(`${ROOT}/build`),
    clientport:8080
  },

  client: {
    src: path.normalize(`${ROOT}/src`)
  }
};
