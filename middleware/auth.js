import jwt from "jsonwebtoken";
export const verifyToken = (request, response, next) => {
    try {
        let token = request.headers.authorization;
        console.log(token);

        token = token.split(" ")[1];
        console.log(token);

        jwt.verify(token, "jhbfdjghdfkhghfdjgbdfkjgbhfbgfhprasang");
        next();
    }
    catch (err) {
        console.log(err);
        return response.status(401).json({ error: "Unauthorized access" });
    }
}