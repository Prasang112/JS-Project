import pool from "../db/dbConfig.js";
class User {
    constructor(id, username, password, email, contact) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.contact = contact;
    }

    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into user(User_ID, username, password, email_id, contact) values(?,?,?,?,?)";
                    con.query(sql, [null, this.username, this.email, this.password, this.contact], (err, result) => {
                        err ? reject(err) : resolve(result);
                    })
                    con.release();
                }
            })
        })
    }
    signIn() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                else {
                    let sql = "select * from user where username=? and password=?";
                    con.query(sql, [this.username, this.password], (err, result) => {
                        err ? reject(err) : !result.length ? reject : resolve(result);
                        con.release();
                    });
                }
            })
        })
    }
    Update() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                else {
                    let sql = "update user set username=?,email_id=?,password=?,contact=? where user_id=?"
                    con.query(sql, [this.username, this.email, this.password, this.contact, this.id], (err, result) => {
                        err ? reject(err) : result.affectedRows == 0 ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default User;