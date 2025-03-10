import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

import indexRoutes from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 8001;
const MASTER_CONN_STR = process.env.MASTER_CONN_STR;

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "*", // Ensure this is correctly set
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Fix


app.use("/api", indexRoutes);

connectDB(MASTER_CONN_STR);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
