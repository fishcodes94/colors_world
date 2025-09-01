import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pkg from 'pg';
const { Pool } = pkg;

import paletteRoutes from "./routes/paletteRoutes.js";

const pool = new Pool({
  user: process.env.PG_USER_NAME,
  host: process.env.PG_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.PG_PASSWORD,
  port: 5432,
  ssl:
    process.env.NODE_ENV === "production"
      ? { require: true, rejectUnauthorized: false }
      : false,
});
pool.connect();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const allowedOrigins= ["http://localhost:5173"]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/palettes", paletteRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
