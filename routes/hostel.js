/**
 * Created by shivanggupta on 01/04/23.
 */

const express = require('express')
const route = express.Router();
const db = require('../db/models').db;
const hostelQueries = require('../db/queries/hostel');
const roomQueries = require('../db/queries/rooms');
const wardenQueries = require('../db/queries/wardens')
const utils = require('../utils');

route.get('/details/:id', (req, res) => {
    db.query(hostelQueries.getFromID(+req.params.id)).then((hostelData) => {
        db.query(roomQueries.getDetailsFromHid(+req.params.id)).then((roomsData) => {
            db.query(wardenQueries.getWardenFromHostelID(+req.params.id)).then((data) => {
                res.send({
                    success: true,
                    data: roomsData[0],
                    wardenData: data[0],
                    hostelData: hostelData[0]
                });
            })
        })
    }).catch(utils.errorFunction(req, res));
})

route.post('/add', function (req, res) {
    db.query(hostelQueries.insertIntoTable(req.body.name, req.body.capacity)).then((data) => {
        res.send({
            success: true
        });
    }).catch(utils.errorFunction(req, res));
})


route.post('/update/:id', (req, res) => {
    db.query(hostelQueries.updateHostel(+req.params.id, req.body)).then((data) => {
        res.send({
            success: true,
            data: data[0]
        })
    }).catch(utils.errorFunction(req, res));
})


route.get('/viewAll', (req, res) => {
    db.query(hostelQueries.selectAll).then((hostels) => {
        console.log(hostels)
        res.send({
            success: true,
            data: hostels[0]
        })
    }).catch(utils.errorFunction(req, res));
})

module.exports = route;
