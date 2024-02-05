import jwt from "jsonwebtoken";

export const verifyToken = async (request, response, next) => {
    try {
        let token = request.headers.authorization;
        token = token.split(" ")[1];
        jwt.verify(token, "adminKey");
        next();

    } catch (err) {
        console.log(err);
        return response.status(405).json({ error: "Unauthorized access" })
    }
}
