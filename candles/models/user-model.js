const pool = require('../config/config');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        const hashedPassword = await bcrypt.hash(member_password, saltRounds);
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

const loginMember = (body) => {
    return new Promise(async (resolve, reject) => {
        const {member_email, member_password} = body;
        const hashedPassword = await bcrypt.hash(member_password, saltRounds);
        pool.query('SELECT * FROM member WHERE member_email = $1 AND member_password = $2', 
        [member_email, hashedPassword], (error, results) => {
            if(error) {
                reject ('error has occured with loginMember', error)
            } else {
                resolve('Login worked successfully', results.rows[0]);
            }
        });
    });
};

module.exports = {
    getMember,
    addMember,
    loginMember,
}