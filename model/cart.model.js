import pool from "../db/dbConfig.js";

class Cart {
    constructor(cartId, userId) {
        this.cartId = cartId;
        this.userId = userId;
    }
    static isCartExist(userId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from cart where user_id=?";
                    con.query(sql, [userId], (err, result) => {
                        con.release();
                        err ? reject(err) : resolve(result);
                    })
                }
            })
        })
    }
    static createCart(userId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into cart(user_id) values(?)";
                    con.query(sql, [userId], (err, result) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            let sql = "select * from cart where user_id = ?";
                            con.query(sql, [userId], (err, result) => {
                                con.release();
                                err ? reject(err) : resolve(result);
                            })
                        }
                    })
                }
            })
        })
    }
    static removeProductToCart(cartId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "delete from cart where cart_id=?";
                    con.query(sql, [cartId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}

export default Cart;