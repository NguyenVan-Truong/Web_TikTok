import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import morgan from "morgan";
import { Router } from "./routers";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

connectDB(process.env.MONGO_URI);
Router(app);
export const viteNodeApp = app;
