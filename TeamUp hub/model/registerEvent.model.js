import pool from "../db/dbConfig.js";

class Register {
    constructor(id, teamId, tournamentId) {
        this.id = id;
        this.teamId = teamId;
        this.tournamentId = tournamentId;
    }
    registerEvent() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into tournament_team_detail(team_id,tournament_id) values(?,?)";
                    con.query(sql, [this.teamId, this.tournamentId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Register;