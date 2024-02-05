import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routers/admin.router.js";
import UserRouter from "./routers/user.router.js";
import EventRouter from "./routers/event.router.js";
import OrganizerRouter from "./routers/organizer.router.js";

const team = express();

team.use(bodyParser.urlencoded({ extended: true }));
team.use(bodyParser.json());

team.use("/admin", AdminRouter);
team.use("/user", UserRouter);
team.use("/event", EventRouter);
team.use("/organizer", OrganizerRouter);

team.listen(3000, () => {
    console.log("Server Started")
});