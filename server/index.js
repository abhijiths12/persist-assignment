import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import AuthRoutes from "./routes/sampleRoutes.js"



dotenv.config();

const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin:[process.env.ORGIN],
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    credentials: true,
}))

app.use(cookieParser())

app.use(express.json())


app.use('/api/auth',AuthRoutes)

const server = app.listen(port, () => {
    console.log(`server is running at ${port}`)
})

mongoose.connect(databaseURL).then(() => console.log('DB connection successful')).catch(err => console.log(err.message))