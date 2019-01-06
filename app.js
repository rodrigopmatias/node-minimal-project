import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import configure from './config';

const buildApplication = (dependencies) => {
  const app = express();

  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined'));
  }

  app.use(bodyParser.json());

  dependencies.forEach(fn => fn(app));

  return app;
};

const app = buildApplication([configure]);

export default app;
