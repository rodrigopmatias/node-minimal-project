const config = {
  development: {
    storage: 'db.development.sqlite',
    dialect: 'sqlite',
    operatorsAliases: false,
  },
  test: {
    storage: 'db.test.sqlite',
    dialect: 'sqlite',
    operatorsAliases: false,
  },
  production: {
    storage: 'db.production.sqlite',
    dialect: 'sqlite',
    operatorsAliases: false,
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];
