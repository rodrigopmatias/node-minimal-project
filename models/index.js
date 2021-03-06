/* eslint  import/no-dynamic-require: off */
/* eslint  no-param-reassign: off */

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const config = require('../config/db.js');

const db = {};

module.exports = (app) => {
  let sequelize;

  if (!db.models) {
    if (config.use_env_variable) {
      sequelize = new Sequelize(process.env[config.use_env_variable], config);
    } else {
      sequelize = new Sequelize(config.database, config.username, config.password, config);
    }

    db.models = [];

    fs
      .readdirSync(__dirname)
      .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
      .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db.models[model.name] = model;
      });

    Object.keys(db.models).forEach((modelName) => {
      if (db.models[modelName].associate) {
        db.models[modelName].associate(db);
      }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
  }

  app.db = db;
};
