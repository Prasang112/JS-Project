import pool from "../db/dbConfig.js";

class Organizer {
    constructor(id, organizerName, email, password, mobile, isActive) {
        this.id = id;
        this.organizerName = organizerName;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.isActive = isActive;

    }
    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into organizer(organizer_name,email,password,mobile,is_active)values(?,?,?,?,?)";
                    con.query(sql, [this.organizerName, this.email, this.password, this.mobile, this.isActive], (err, result) => {
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
                    let sql = "select * from organizer where email=? and password=?";
                    con.query(sql, [this.email, this.password], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Organizer;
