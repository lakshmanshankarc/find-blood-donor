// const mysql2 = require('mysql2');
// const Poolconfig = require('../connection.js');
import { Poolconfig } from '../connection.js';
import { createPool } from 'mysql2';
import bcrypt from 'bcrypt'
import { config } from 'dotenv';
config()
const pool = createPool(Poolconfig);

import jwt from 'jsonwebtoken'
// // Description: This file contains the configuration for the database connection
// create new user

export const createUser = (req, res) => {
    const { username, age, email, password, bloodgroup, telegramlink, location, role, donoravailon } = req.body;
    // check if user exists
    const search = pool.query(`SELECT * FROM UserTable where email = ?`, [email], (err, result) => {
        if (err) res.status(500).json({ error: err })
        if (result.length > 0) {
            res.status(200).json({ message: "User already exists" })
        } else if (result.length === 0) {
            const hashed = bcrypt.hashSync(req.body.password, 10);
            const q = `INSERT INTO UserTable (username,age, email, password,bloodgroup,telegramlink,location,role,donoravailon) VALUES (?,?,?,?,?,?,?,?,?)`
            const create = pool.query(q, [username, age, email, hashed, bloodgroup, telegramlink, location, role, donoravailon], (err, result) => {
                if (err) res.status(500).json({ error: err })
                res.status(200).json({ result: "User created successfully" })
            })
        }
    })
}


export const loginUser = (req, res) => {
    const { email, password } = req.body;
    console.log(process.env.JWT_SECRET)
    const q = `SELECT * FROM UserTable where email = "${email}"`
    const search = pool.query(q, (err, result) => {
        if (err) res.status(500).json({ error: err })
        if (result.length > 0) {
            const compare = bcrypt.compareSync(password, result[0].password);
            if (compare) {
                const token = jwt.sign({ email: result[0].email, password: result[0].password, role: result[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true });
                res.status(200).json({ result: "User logged in successfully", user: result, token: token })
            } else {
                res.status(200).json({ message: "Incorrect password" })
            }
        } else if (result.length === 0) {
            res.status(200).json({ message: "User does not exist" })
        }
    })
}

