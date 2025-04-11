import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/book.routes.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();
const Port = process.env.PORT || 4000;
const uri = process.env.URL;
app.use(express.json());
app.use(cors());
if (!uri) {
  console.error("MongoDB URI is missing in environment variables.");
  process.exit(1);
}

// Connect to DB
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

app.use("/books", router); // http://localhost:3000/books
app.use("/user", userRoutes); //  http://localhost:3000/user/login

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
});
