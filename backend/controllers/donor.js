import { Poolconfig } from "../connection.js";
import { createPool } from "mysql2";
import { config } from "dotenv";
config();
const pool = createPool(Poolconfig);
import jwt from 'jsonwebtoken'

export const donoteUpdate = async function (req, res) {
    const token = req.cookies["blood-token"]
    const { udate } = req.body
    if (!token) res.status(200).json({ message: 'Request is missing blood token' })
    else {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            const user = decoded
            //  write a update query that updates the last_donated_date of the user
            //  and send the response
            console.log(user);
            const { user_id } = user
            if (user_id === undefined) res.status(200).json({ message: 'User id is undefined' })
            else {
                const [rows, fields] = await pool.promise().query(`UPDATE UserTable SET donoravailon = "${udate}" WHERE user_id = "${user_id}"`)
                const insert = `INSERT INTO DonorTable (donor_id, date) VALUES (?, ?)`
                const [rows1, fields1] = await pool.promise().query(insert, [user_id, udate])
                res.status(200).json({ message: 'Last donated date updated successfully', rowsaffected: rows })
            }
        })
    }
}


export const searchByDonor = async function (req, res) {
    const token = req.cookies["blood-token"]
    if (!token) res.status(200).json({ message: 'Request is missing blood token' })
    else {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            const user = decoded
            const { user_id } = user
            if (user_id === undefined) res.status(200).json({ message: 'User id is undefined' })
            else {
                const select = `SELECT * FROM DonorTable WHERE donor_id = ?`
                const [rows1, fields1] = await pool.promise().query(select, [user_id])
                res.status(200).json({ message: 'Fetched', rowsaffected: rows1 })
            }
        })
    }
}




