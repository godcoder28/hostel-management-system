/**
 * Created by shivanggupta on 01/04/23.
 */

const express = require('express')
const route = express.Router();
const db = require('../db/models').db;
const inventoryQueries = require('../db/queries/inventory');
const utils = require('../utils');

route.post('/add', function (req, res) {
    db.query(inventoryQueries.insertIntoTable(req.body.name, req.body.hid, req.body.qty)).then((data) => {
        res.send({
            success: true
        });
    }).catch(utils.errorFunction(req, res))
})


route.get('/viewAll', (req, res) => {
    db.query(inventoryQueries.selectAll).then((inventory) => {
        res.send({
            success: true,
            data: inventory[0]
        })
    }).catch(utils.errorFunction(req, res))
})

module.exports = route;
