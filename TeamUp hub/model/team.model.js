import pool from "../db/dbConfig.js";

class Team {
    constructor(id, teamName, totalPlayer, contact) {
        this.id = id;
        this.teamName = teamName;
        this.totalPlayer = totalPlayer;
        this.contact = contact;
    }
    addTeam() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into team(team_name,total_player,contact) values(?,?,?)";
                    con.query(sql, [this.teamName, this.totalPlayer, this.contact], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Team;