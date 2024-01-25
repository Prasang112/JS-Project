import User from "../model/user.model.js";
import Address from "../model/address.model.js";
import jwt from "jsonwebtoken";

export const signUp = (request, response, next) => {
    let username = request.body.username;
    let email = request.body.email_id;
    let password = request.body.password;
    let contact = request.body.contact;

    let user = new User(null, username, email, password, contact);

    user.signUp()
        .then(result => {
            console.log(result);
            let payload = {subject: username };

            let token = jwt.sign(payload, "mysecretkey");
            return response.status(200).json({ message: "SignUp Success", data: result[0], token:token });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const signIn = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    let user = new User(null, username, password);

    user.signIn()
        .then(result => {
            if (result.length) {
                let payload = { subject: username };
                let token = jwt.sign(payload, "jhbfdjghdfkhghfdjgbdfkjgbhfbgfhprasang")
            return response.status(200).json({ message: "SignIn Success", data: result[0], token:token });
            }
            else {
                return response.status(401).json({ error: "Unauthorized request" })
            }
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const update = (request, response, next) => {
    let id = request.body.user_id;
    let username = request.body.username;
    let password = request.body.email_id;
    let email = request.body.password;
    let contact = request.body.contact;

    console.log(id + " " + username + " " + email + " " + password + " " + contact);

    let user = new User(id, username, email, password, contact);

    user.Update()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "User Update Success" });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}
export const addresstable = (request, response, next) => {
    let userId = request.body.userId;
    let address = request.body.address;
    let city = request.body.city;
    let state = request.body.state;
    let country = request.body.country;

    let ad = new Address(userId, address, city, state, country);

    ad.getaddress()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Address register successfully" });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}