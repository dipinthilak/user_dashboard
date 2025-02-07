import express from "express";
import dotenv from "dotenv";
import authRoutes from "./router/authRoutes";
import widgetRoutes from "./router/widgetRoutes";
import morgan from "morgan";
import cors from "cors";


dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:3000", 
    methods: "GET,POST,PUT,DELETE", 
    credentials: true 
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/widgets", widgetRoutes);

export default app;
