import express from 'express'
import { config } from 'dotenv';
import { userrouter } from "./routes/user.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { Poolconfig } from "../backend/connection.js";
import { createPool } from "mysql2";

config();

const pool = createPool(Poolconfig);

const app = express();
const PORT = process.env.NODE_PORT || 4500

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    credentials:true,
    origin:'http://localhost:5173'
  })
);

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use("/user", userrouter)

app.get("/", (req, res) => {
  res.json('Hello world');
})

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM UserTable', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.code, message: error.message, name: error.name });
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Donor App running On ${PORT}`)
})