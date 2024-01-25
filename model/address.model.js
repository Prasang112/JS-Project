import pool from "../db/dbConfig.js";

export default class Address {
    constructor(userId, address, city, state, country) {
        this.userId = userId;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
    }
    getaddress() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into address(user_id,Complete_Address,city,state,country) values(?,?,?,?,?)";
                    con.query(sql, [this.userId, this.address, this.city, this.state, this.country], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}