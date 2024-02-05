import User from "../model/user.model.js";
import Category from "../model/category.model.js";
import Bowler from "../model/bowler.model.js";
import Team from "../model/team.model.js";
import jwt from "jsonwebtoken";;

export const signUp = (request, response, next) => {

    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let password = request.body.password;
    let age = request.body.age;
    let height = request.body.height;
    let address = request.body.address;
    let gender = request.body.gender;
    let NOofmatches = request.body.NOofmatches;
    let categoryId = request.body.categoryId;
    let image = request.body.image;
    let description = request.body.description;
    let IsActive = request.body.IsActive;

    let user = new User(null, firstName, lastName, email, password, age, height, address, gender, NOofmatches, categoryId, image, description, IsActive);

    user.signUp()
        .then(result => {
            if (result.length) {
                let payload = {};
                let token = jwt.sign(payload, "userKey")
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

    let user = new User(null, email, password);

    user.signIn()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "SignIn success" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const viewAllUser = (request, response, next) => {

    User.viewAllUser()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "User List", data: ({ result }) })
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        })
}

export const updateUser = (request, response, next) => {

    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let password = request.body.password;
    let age = request.body.age;
    let height = request.body.height;
    let address = request.body.address;
    let NOofmatches = request.body.NOofmatches;
    let image = request.body.image;
    let description = request.body.description;
    let IsActive = request.body.IsActive;

    let user = new User(null, firstName, lastName, email, password, age, height, address, NOofmatches, image, description, IsActive);

    user.updateUser()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "User Update success" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const viewProfile = (request, response, next) => {
    let userId = request.body.userId;

    User.viewProfile(userId)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Data: result });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const addCategory = (request, response, next) => {
    let type = request.body.type;

    let category = new Category(null, type);

    category.add()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Category insert success" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}
export const addBowler = (request, response, next) => {
    let bowlerType = request.body.bowlerType;
    let arm = request.body.arm;

    let bowler = new Bowler(null, bowlerType, arm);

    bowler.addBowler()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Bowler Add successfully" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        })
}

export const addTeam = (request, response, next) => {
    let teamName = request.body.teamName;
    let totalPlayer = request.body.totalPlayer;
    let contact = request.body.contact;

    let team = new Team(null, teamName, totalPlayer, contact);

    team.addTeam()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Team Add successfully" });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        })
}