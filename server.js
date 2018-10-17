const app = require('express')();
const bp = require('body-parser');
const mysql = require('mysql');
const connection = require('express-myconnection');
const exthbs = require('express-handlebars');
const routes = require('./routes');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(connection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'nodejs'
}, 'pool'));

routes(app);

app.listen(3000);