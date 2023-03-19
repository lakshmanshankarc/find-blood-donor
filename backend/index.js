import express from 'express'
import { config } from 'dotenv';
import { userrouter } from "./routes/user.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'

config();
const app = express();
const PORT = process.env.NODE_PORT || 5000

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
  res.send('Hello world');
})

app.listen(PORT, () => {
  console.log(`Donor App running On ${PORT}`)
})
