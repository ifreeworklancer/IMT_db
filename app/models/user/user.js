const md5 = require('md5');
const fields = require('../../kernel').fields;
const avatar = require('./avatar');

/**
 * Define model table name
 */
const table = 'users';

/**
 * Set field to write
 */
const fillable = [
    'name',
    'email',
    'password',
    'role_id',
];

/**
 * Define guarded fields
 */
const guarded = [
    'password'
];

/**
 * Define dates fields
 */
const dates = [
    'created_at',
    'updated_at',
];

/** 
 * Builder 
 */
const builder = `SELECT id, ${fields(fillable, guarded)} FROM ${table}`;

/**
 * Get users or single user
 * with avatar(s)
 */
const usersAvatars = `
    SELECT u.id, u.name, u.email, a.image_url
    FROM users AS u
    LEFT JOIN avatars AS a 
    ON u.id = a.user_id
`;

module.exports.all = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) throw new Error;

        connection.query(usersAvatars, (err, rows) => {
            if (err) throw new Error;
            res.json(rows);
        })
    })
}

module.exports.single = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) throw new Error;

        connection.query(`${usersAvatars} WHERE u.id = ?`, [+req.params.id], (err, rows) => {
            if (err) throw new Error;

            res.json(rows[0]);
        });
    })
}

module.exports.add = (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password)
    }

    req.getConnection((err, connection) => {
        if (err) throw new Error;

        connection.query(`INSERT INTO ${table} SET ?`, [data], (err) => {
            if (err) throw new Error;
        });

        connection.query(`${builder} WHERE email = ?`, [data.email], (err, rows) => {
            if (err) throw new Error;
            res.json(rows[0]);
        });
    });
}

module.exports.update = (req, res) => {
    const data = {
        name: req.body.name
    }

    req.getConnection((err, connection) => {
        if (err) throw new Error;

        connection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, req.params.id], (err) => {
            if (err) throw new Error;
        });

        connection.query(`${builder} WHERE id = ?`, [req.params.id], (err, rows) => {
            if (err) throw new Error;
            res.json(rows[0]);
        });
    })
}

module.exports.table;