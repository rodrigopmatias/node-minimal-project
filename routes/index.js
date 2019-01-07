/* eslint  import/no-dynamic-require: off */
/* eslint  global-require: off */
import fs from 'fs';
import path from 'path';

export default (app) => {
  fs.readdirSync(__dirname)
    .filter(filename => /^.*\.js$/.test(filename) && filename !== 'index.js')
    .forEach((filename) => {
      try {
        const configure = require(path.join(__dirname, filename)).default;
        configure(app);
      } catch (e) {
        // empty
      }
    });
};
