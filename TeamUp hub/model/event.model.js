import pool from "../db/dbConfig.js";

class Event {
    constructor(id, tournamentName, banner, teamLimit, address, startDate, applyDate, endDate, organizerId, fees, firstPrice, secondPrice, thirdPrice) {
        this.id = id;
        this.tournamentName = tournamentName;
        this.banner = banner;
        this.teamLimit = teamLimit;
        this.address = address;
        this.startDate = startDate;
        this.applyDate = applyDate;
        this.endDate = endDate;
        this.organizerId = organizerId;
        this.fees = fees;
        this.firstPrice = firstPrice;
        this.secondPrice = secondPrice;
        this.thirdPrice = thirdPrice;
    }
    add() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into tournament(tournament_name,banner,tournament_team_limit,tournament_address,tournament_start_date,tournament_apply_date,tournament_end_date,organizer_id,tournament_fees,first_price,second_price,third_price) values(?,?,?,?,?,?,?,?,?,?,?,?)";
                    con.query(sql, [this.tournamentName, this.banner, this.teamLimit, this.address, this.startDate, this.applyDate, this.endDate, this.organizerId, this.fees, this.firstPrice, this.secondPrice, this.thirdPrice], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static viewEvent() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "select * from tournament";
                    con.query(sql, (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
  

}
export default Event;