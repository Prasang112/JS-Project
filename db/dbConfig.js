import mysql from "mysql2";

export default mysql.createPool({
    user: "root",
    password: "root",
    database: "myshop",
    host: "localhost",
    connectionLimit: 100
}); 