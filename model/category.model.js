import pool from "../db/dbConfig.js";

export default class Category {
    constructor(id, categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }
    static delete(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "delete from category where category_id=?";
                    con.query(sql, [id], (err, result) => {
                        err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        con.release();
                    })
                }
            })
        })
    }
    static getCategoryById(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from category where category_id=?";
                    con.query(sql, [id * 1], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into category(category_name) values(?)";
                    con.query(sql, [this.categoryName], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static list() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from category";
                    con.query(sql, (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}