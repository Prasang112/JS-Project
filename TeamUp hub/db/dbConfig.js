import mysql from "mysql2";

export default mysql.createPool({
    user: "root",
    password: "root",
    database: "cricket",
    host: "localhost",
});