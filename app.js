import express from 'express' // import express
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import "dotenv/config";
// import session from "express-session";


const app = express() // create new express instance
app.use(cors());
app.use(express.json()); // parse JSON body
Hello(app)
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000) // listen to http://localhost:4000


