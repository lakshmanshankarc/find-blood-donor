// const mysql2 = require('mysql2');
// const Poolconfig = require('../connection.js');
import { Poolconfig } from "../connection.js";
import { createPool } from "mysql2";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();
const pool = createPool(Poolconfig);
import jwt from "jsonwebtoken";
// // Description: This file contains the configuration for the database connection
// create new user

export const createUser = async (req, res) => {
  const {
    username,
    age,
    email,
    password,
    bloodgroup,
    telegramlink,
    location,
    role,
    donoravailon,
  } = req.body;
  // check if user exists
   pool.query(`SELECT * FROM UserTable where email = ?`, [email], (err, result) => {
        if (err) res.status(500).json({ error: err })
        if (result.length > 0) {
            res.status(200).json({ message: "User already exists" })
        } else if (result.length === 0) {
            const hashed = bcrypt.hashSync(password, 10);
            const q = `INSERT INTO UserTable (username,age, email, password,bloodgroup,telegramlink,location,role,donoravailon) VALUES (?,?,?,?,?,?,?,?,?)`
            pool.query(q, [username, age, email, hashed, bloodgroup, telegramlink, location, role, donoravailon], (err, result) => {
                if (err) res.status(500).json({ error: err })
                res.status(200).json({ message: "User created successfully" })
            })
        }
    })


};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const q = `SELECT * FROM UserTable where email = "${email}"`;
  pool.query(q, (err, result) => {
    if (err) res.status(500).json({ error: err });
    if (result.length > 0) {
      const compare = bcrypt.compareSync(password, result[0].password);
      if (compare) {
        const token = jwt.sign(
          result[0],
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.cookie("token", token, { httpOnly: true });
        res
          .status(200)
          .json({
            message: "Login successfull.",
            user: result,
            token: token,
          });
      } else {
        res.status(200).json({ message: "Incorrect password" });
      }
    } else if (result.length === 0) {
      res.status(200).json({ message: "User does not exist" });
    }
  });
};
export const getUserFToken=async function (req,res) {
  const token = req.cookies["blood-token"]
  console.log(token,"is what")
   if (!token) res.status(200).json({message:'Request is missing blood token'})
  else{
    jwt.verify(token,process.env.JWT_SECRET,async(err,decoded)=>{
      const user=decoded
      console.log(user)
      res.status(200).json({message:"Sucess",user:user})
    })
  }
}


