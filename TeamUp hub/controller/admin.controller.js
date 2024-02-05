import Admin from "../model/admin.model.js"
import jwt from 'jsonwebtoken'
export const signUp = (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    let admin = new Admin(null, email, password);

    admin.signUp()
        .then(result => {
            if (result.affectedRows) {
                let payload = { email, password };
                let token = jwt.sign(payload, "adminKey")
                return response.status(200).json({ message: "SignUp Success", data: result[0], token: token });
            }
            else {
                console.log(result);
                return response.status(401).json({ error: "Unauthorized request" })
            }
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const signIn = (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    let admin = new Admin(null, email, password);

    admin.signIn()
        .then(result => {
            return response.status(200).json({ message: "SignIn Success", data: result });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const viewUser = (request, response, next) => {

    Admin.viewUser()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "User List", data: ({ result }) })
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        })
}


export const removeUser = (request, response, next) => {
    let userId = request.body.userId;

    Admin.removeUser(userId)
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Remove user successfully" });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });

}

