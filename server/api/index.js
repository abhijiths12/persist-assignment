// import express from "express"
// import dotenv from 'dotenv'
// import cors from 'cors'
// import cookieParser from 'cookie-parser'
// import mongoose from 'mongoose'
// import AuthRoutes from "./routes/sampleRoutes.js"



// dotenv.config();

// const app = express();
// const port = process.env.PORT;
// const databaseURL = process.env.DATABASE_URL;




// app.use(cors({
//     origin:[process.env.ORGIN],
//     methods: ['GET','POST','PUT','PATCH','DELETE'],
//     credentials: true,
// }))


// app.get('/',(req,res) => {
//     res.status(200).send("hello from the backend")
// })
// app.use(cookieParser())

// app.use(express.json())


// app.use('/api/auth',AuthRoutes)

// const server = app.listen(port, () => {
//     console.log(`server is running at ${port}`)
// })

// mongoose.connect(databaseURL).then(() => console.log('DB connection successful')).catch(err => console.log(err.message))

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import AuthRoutes from "../routes/sampleRoutes.js"; // adjust path

import { createServer } from "http"; // not needed, just here for context
import serverless from "serverless-http";

dotenv.config();

const app = express();
const databaseURL = process.env.DATABASE_URL;

mongoose.connect(databaseURL)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.use(cors({
  origin: [process.env.ORIGIN], // make sure this is allowed frontend domain
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello from Vercel backend!");
});

app.use("/api/auth", AuthRoutes);

// Export the serverless handler
export const handler = serverless(app);
