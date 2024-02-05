import pool from "../db/dbConfig.js";

class User {
    constructor(userId, firstName, lastName, email, password, age, height, address, gender, NOofmatches, categoryId, image, description, IsActive) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.height = height;
        this.address = address;
        this.gender = gender;
        this.NOofmatches = NOofmatches;
        this.categoryId = categoryId;
        this.image = image;
        this.description = description;
        this.IsActive = IsActive;
    }

    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into user(first_name,last_name,email,password,age,height,address,gender,no_of_matches,category_id,image,description,is_active) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    con.query(sql, [this.firstName, this.lastName, this.email, this.password, this.age, this.height, this.address, this.gender, this.NOofmatches, this.categoryId, this.image, this.description, this.IsActive], (err, result) => {
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
                    let sql = "select * from user where email=? and password=?";
                    con.query(sql, [this.email, this.password], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    
    static viewAllUser() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from user ";
                    con.query(sql, (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();

                    })
                }
            })
        })
    }
    updateUser() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "update user set first_name=?,last_name=?,email=?,password=?,age=?,height=?,address=?,no_of_matches=?,image=?,description=?,is_active=? where user_id=?";
                    con.query(sql, [this.firstName, this.lastName, this.email, this.password, this.age, this.height, this.address, this.NOofmatches, this.image, this.description, this.IsActive], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static viewProfile(userId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from user where user_id=?";
                    con.query(sql, [userId], (err, result) => {
                        err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        con.release();
                    })
                }
            })
        })
    }
}
export default User;