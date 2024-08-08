import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js"
import quoteRouter from "./routes/quoteRoutes.js"
import authorRouter from "./routes/authorRoutes.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})

.catch((error)=>{
    console.log("Error", error)
})


// routes
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/quote", quoteRouter);
app.use("/author", authorRouter);
