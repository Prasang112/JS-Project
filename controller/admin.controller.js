
import Admin from "../model/admin.model.js";

export const signUp = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    let admin = new Admin(null, username, password);

    admin.signUp()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "SignUp success" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}

export const signIn = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    let admin = new Admin(null, username, password);

    admin.signIn()
        .then(result => {
            return response.status(200).json({ message: "SignIn success" });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server error" });
        });
}

export const Update = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    let admin = new Admin(null, username, password);

    admin.Update()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Update Successful" });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}