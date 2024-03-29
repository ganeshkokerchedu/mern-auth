import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import listingRoute from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";



dotenv.config();

const _dirname = path.resolve();
const app = express();
app.use(cors({
      origin: "http://localhost:3000",
      optionsSuccessStatus: 200,
}));
app.use(express.static(path.join(_dirname, "/client/dist")))
app.get("*", (req,res)=>{
      res.sendFile(path.join(_dirname, 'client','dist','index.html'))
})
app.use(express.json());

app.use(cookieParser());
mongoose.connect(process.env.MONGO).then(()=>{
console.log('Conncted to MongoDB')
}
).catch((err)=>{
      console.log(err);
})

app.listen(3000, ()=>{
      console.log('Server listening on port 3000!')
});

// Path: api/index.js
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/listing', listingRoute);

    app.use((err, req,res,next)=>{
      const statusCode = err.statusCode || 500;
      const message = err.message || 'Internal Server Error'
       return res.status(statusCode).json({
             success: false,
             message,
             statusCode,
       })
    })