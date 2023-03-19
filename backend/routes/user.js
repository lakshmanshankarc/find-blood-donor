import { Router } from "express"
import { createUser, loginUser, getUserFToken } from "../controllers/user.js";
export const userrouter = Router();

userrouter.get("/", getUserFToken)

userrouter.post("/signup", createUser)
userrouter.post("/login", loginUser)
