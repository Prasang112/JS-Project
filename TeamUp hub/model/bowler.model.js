import pool from "../db/dbConfig.js";

class Bowler {
    constructor(id, bowlerType, arm) {
        this.id = id;
        this.bowlerType = bowlerType;
        this.arm = arm;
    }
    addBowler() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into bowler(bowler_type,arm) values(?,?)";
                    con.query(sql, [this.bowlerType, this.arm], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Bowler;