/**
 * Created by shivanggupta on 01/04/23.
 */

const express = require('express');
const session = require('express-session')
const app = express();

const db = require('./db/models').db;
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api', require('./routes/index'));

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

app.post('/login', (req, res) => {
    res.send({
        success: true,
        url: '/student/'
    });
})

app.get('/student', (req, res, next) => {
    if (!req.user) {
        console.log("ABC")
        return res.redirect('/');
    }
    next();
})

app.use(express.static(__dirname + '/public'));

app.listen(8888, () => {
    console.log("Server Listening on port 8888");
})
