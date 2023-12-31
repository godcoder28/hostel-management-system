/**
 * Created by shivanggupta on 01/04/23.
 */

const express = require('express')
const route = express.Router();

route.use('/student', require('./student'));
route.use('/application', require('./application'));
route.use('/hostel', require('./hostel'));
route.use('/rooms', require('./rooms'));
route.use('/warden', require('./warden'));
route.use('/inventory', require('./inventory'));
route.use('/fines', require('./fines'));
route.use('/attendance', require('./attendance'));
module.exports = route;
