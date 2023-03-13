import { Router } from "express"
import { createUser, loginUser } from "../controllers/user.js";
export const userrouter = Router();

userrouter.get("/", (req, res) => {
  res.status(200).json("User Detail")
})

userrouter.post("/signup", createUser)
userrouter.post("/login", loginUser)
