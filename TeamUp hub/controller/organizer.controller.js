import Organizer from "../model/organizer.model.js";

export const signUp = (request, response, next) => {
    let organizerName = request.body.organizerName;
    let email = request.body.email;
    let password = request.body.password;
    let mobile = request.body.mobile;
    let isActive = request.body.isActive;

    let organizer = new Organizer(null, organizerName, email, password, mobile, isActive);

    organizer.signUp()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "SignUp success" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}

export const signIn = (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    let organizer = new Organizer(null, email, password);

    organizer.signIn()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "SignIn success" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}