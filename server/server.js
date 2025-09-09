import express from "express";
import cors from "cors";
import connectDB from "./config/mongoDB.js";

const app = express();

// middelwares
app.use(cors());
app.use(express.json());

// database conection 
connectDB()

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is working!!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
