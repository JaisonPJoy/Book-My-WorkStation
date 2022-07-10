import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import officesRoute from "./routes/offices.js";
import resourcesRoute from "./routes/resources.js";
import cookieParser from "cookie-parser";
// import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongodb");
    } catch (error) {
        // console.log(error)
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middlewares
// app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/offices", officesRoute);
app.use("/api/resources", resourcesRoute);

//error handler

app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong";
    return res.status(errorStatus).json({ 
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : error.stack
    })
})

app.listen(8800, () => {
    connect();
    console.log("connected to back end");
})

