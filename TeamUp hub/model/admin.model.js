import pool from "../db/dbConfig.js";

class Admin {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into admin(email,password) values(?,?)";
                    con.query(sql, [this.email, this.password], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    signIn() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from admin where email=? and password=?";
                    con.query(sql, [this.email, this.password], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static viewUser() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from user ";
                    con.query()
                    err ? reject(err) : resolve(result);
                    con.release();
                }
            })
        })
    }
     static removeUser(userId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "delete from user where user_id=?"
                    con.query(sql, [userId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Admin;