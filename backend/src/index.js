import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import{connectDB} from "./lib/db.js";
import cors from "cors"
import { app,server } from "./lib/socket.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";


dotenv.config();
app.use(cookieParser());

const PORT =process.env.PORT;
const _dirname = path.resolve();

// ✅ This line is crucial to parse incoming JSON requests
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
}))

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(_dirname, "../front-end/dist")));

    app.get("*", (req,res)=>{
        res.sendFile(path.join(_dirname,"../front-end", "dist", "index.html"));
    });

}

server.listen(PORT,()=>{
    console.log("server is running on PORT:" + PORT);
    connectDB()
});