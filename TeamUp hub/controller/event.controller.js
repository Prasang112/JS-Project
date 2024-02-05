import Event from "../model/event.model.js";
import Register from "../model/registerEvent.model.js";

export const add = (request, response, next) => {
    let tournamentName = request.body.tournamentName;
    let banner = request.body.banner;
    let teamLimit = request.body.teamLimit;
    let address = request.body.address;
    let startDate = request.body.startDate;
    let applyDate = request.body.applyDate;
    let endDate = request.body.endDate;
    let organizerId = request.body.organizerId;
    let fees = request.body.fees;
    let firstPrice = request.body.firstPrice;
    let secondPrice = request.body.secondPrice;
    let thirdPrice = request.body.thirdPrice;

    let event = new Event(null, tournamentName, banner, teamLimit, address, startDate, applyDate, endDate, organizerId, fees, firstPrice, secondPrice, thirdPrice);

    event.add()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Event add success" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}
export const viewEvent = (request, response, next) => {

    Event.viewEvent()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Event List", data: ({ result }) })
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        })
}

export const registerEvent = (request, response, next) => {
    let teamId = request.body.teamId;
    let tournamentId = request.body.tournamentId;

    let register = new Register(null, teamId, tournamentId);

    register.registerEvent()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Registeration Successfully" })
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        })
}