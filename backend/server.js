import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import connectMongoDB from "./data/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// console.log(process.env.MONGO_URI)
app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});

// console.log("Server is running")