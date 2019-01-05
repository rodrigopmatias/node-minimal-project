/* eslint  no-param-reassign: off */
export default (app) => {
  const config = {
    addr: (process.env.APP_ADDR || '0.0.0.0'),
    port: (process.env.APP_PORT || '3000'),
  };

  app.config = config;
};
