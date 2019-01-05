import chai from 'chai';
import testdouble from 'testdouble';
import HttpStatus from 'http-status-codes';
import app from '../../app';

global.expect = chai.expect;
global.td = testdouble;
global.HttpStatus = HttpStatus;
global.app = app;
