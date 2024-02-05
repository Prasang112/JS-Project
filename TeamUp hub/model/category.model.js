import pool from "../db/dbConfig.js";

class Category {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
    add() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into category(type) values(?)";
                    con.query(sql, [this.type], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Category;