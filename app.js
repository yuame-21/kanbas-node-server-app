import express from 'express' // import express
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import "dotenv/config";
import UserRoutes from "./users/routes.js";
import session from "express-session";


import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
// import session from "express-session";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);

const app = express() // create new express instance
app.use(cors({
                 credentials: true, // support cookies
                 origin: process.env.FRONTEND_URL// restrict cross origin resource sharing to the react application
             }));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json()); // parse JSON body
UserRoutes(app);
Hello(app)
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000) // listen to http://localhost:4000


