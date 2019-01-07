import HttpStatus from 'http-status-codes';

export default (app) => {
  app.route('/heart-check')
    .get((req, res) => res.sendStatus(HttpStatus.OK));
};
