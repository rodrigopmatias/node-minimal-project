/* eslint no-console: "off" */

import http from 'http';
import https from 'https';
import app from './app';

let server;
let port;
let addr;

if (app.config.ssl) {
  server = https.createServer(
    {
      key: app.config.ssl.key,
      cert: app.config.ssl.cert,
    },
    app,
  );

  addr = app.config.ssl.addr;
  port = app.config.ssl.port;
} else {
  server = http.createServer(app);

  addr = app.config.addr;
  port = app.config.port;
}

server.listen(port, addr, () => {
  console.log(`running in ${process.env.NODE_ENV} mode, on ${addr}:${port}`);
});
