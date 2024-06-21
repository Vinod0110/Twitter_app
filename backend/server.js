import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js"
import userRoutes from "./routes/userRoute.js"
import postRoutes from "./routes/postRoute.js"
import notificationRoutes from "./routes/notificationRoute.js"
import connectMongoDB from "./data/connectMongoDB.js";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(express.json({limit:"5mb"})); // to parse req.body/ and limit shouldn't be to high to prevent DOS
app.use(express.urlencoded({extended: true})); // to parse from data(urlencoded)
app.use(cookieParser());
// console.log(process.env.MONGO_URI)
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});

// console.log("Server is running")