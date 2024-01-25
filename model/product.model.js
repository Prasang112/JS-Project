import { response } from "express";
import pool from "../db/dbConfig.js";
class Product {
    constructor(categoryId, productName, price, brand, description, image) {

        this.categoryId = categoryId;
        this.productName = productName;
        this.price = price;
        this.brand = brand;
        this.description = description;
        this.image = image;
    }
    add() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into product(category_Id,product_name,price,brand,description,image) values(?,?,?,?,?,?)";
                    con.query(sql, [this.categoryId, this.productName, this.price, this.brand, this.description, this.image], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    update(productId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "update product set product_name=?,price=?,brand=?,description=?,image=? where product_id=?";
                    con.query(sql, [this.productName, this.price, this.brand, this.description, this.image, productId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    remove(productId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "delete from product where product_id=?"
                    con.query(sql, [productId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static productList() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "select *,category.Category_name from product inner join category on product.Category_Id = category.Category_Id";
                    con.query(sql, (err, result) => {
                        err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        con.release();
                    })
                }
            })
        })
    }

    static particularProduct(productId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from product where product_id=?";
                    con.query(sql, [productId], (err, result) => {
                        err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        con.release();
                    })
                }
            })
        })
    }
    static productListByCategory(categoryId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from product where category_id=?";
                    con.query(sql, [categoryId], (err, result) => {
                        err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Product;