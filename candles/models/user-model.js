const pool = require('../config/config');
const bcrypt = require('bcrypt');

const getMember = () => {
    return new Promise(async (resolve, reject) => {
        pool.query('SELECT * FROM member ORDER BY member_id ASC', (error, results) => {
            if (error) {
                reject ('something has been rejcts', error)
            } else {
                resolve(results.rows);
            };
        });    
    });
};

const addMember = (body) => {
    return new Promise(async (resolve, reject) => {
        const {member_name, member_email, member_password} = body;
        const hashedPassword = await bcrypt.hash(member_password, 10);
        pool.query('INSERT INTO member (member_name, member_email, member_password) VALUES ($1, $2, $3) RETURNING *',
        [member_name, member_email, hashedPassword], (error, results) => {
            if(error) {
                reject ('error has occured with model', error)
            } else {
                resolve(`A new member has signed up ${results.rows[0]}`);
            }
        });
    });
};

const loginMember = () => {
    return new Promise(async (resolve, reject) => {
        pool.query('SELECT * FROM member WHERE member_email = ? AND member_password = ?', 
        [req.body.member_email, req.body.member_password],
        (error, results) => {
            if (error) {
                reject ('something has been rejcts', error)
            } else {
                resolve(results.rows);
            };
        });    
    });
};

module.exports = {
    getMember,
    addMember,
    loginMember,
}