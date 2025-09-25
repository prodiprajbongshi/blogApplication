import express from "express";
import cors from "cors";
import connectDB from "./config/mongoDB.js";
import  "dotenv/config";
import adminRouter from "./routes/adminRoute.js"
import blogRouter from "./routes/blogRouter.js";
 
const app = express();

// middelwares
app.use(cors());
app.use(express.json());
 
// database conection 
await connectDB()

const PORT = process.env.PORT || 3000;

// routes 
app.get("/", (req, res) => {
  res.send("API is working!!");
});
app.use("/api/admin", adminRouter)
app.use("/api/blog", blogRouter)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;