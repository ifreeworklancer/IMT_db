const fields = require('../../kernel').fields;
const user = require('./user');

const table = 'avatars';

const fillable = [
    'user_id',
    'image_url',
];

const builder = `SELECT ${fields(fillable)} FROM ${table}`;

module.exports.add = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) throw new Error;

        connection.query(`INSERT INTO ${table} (${fields(fillable)}) VALUES (?, ?)`, [req.params.id, 'https://randomuser.me/api/portraits/men/46.jpg'], (err) => {
            if (err) throw new Error;
        });

        res.status(201);
    });
}