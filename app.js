import express from 'express';

import configure from './config';

const buildApplication = (dependencies) => {
  const app = express();

  dependencies.forEach(fn => fn(app));

  return app;
};

const app = buildApplication([configure]);

export default app;
