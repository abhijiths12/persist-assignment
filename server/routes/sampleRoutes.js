import { Router } from "express";
import { challengesData, InsertChallenges, UpdateData } from "../controllers/samplecontroller.js";


const AuthRoutes = Router();

AuthRoutes.post('/insertchallenges',InsertChallenges)
AuthRoutes.get('/challengesdata',challengesData)
AuthRoutes.post('/updatedata',UpdateData)


export default AuthRoutes