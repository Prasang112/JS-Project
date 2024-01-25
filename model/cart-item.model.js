import pool from "../db/dbConfig.js";
export default class CartItem {
    constructor(id, cartId, productId) {
        this.id = id;
        this.cartId = cartId;
        this.productId = productId;
    }

    static saveCartItem(cartId, productId) {
        return new Promise((resolve, reject) => {
            console.log("cartId ; " + cartId);
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into cart_item(cart_id,product_id) values(?,?)";
                    con.query(sql, [cartId, productId], (err, result) => {
                        con.release();
                        err ? reject(err) : resolve(result);

                    })

                }
            })
        })
    }
}