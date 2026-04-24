const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    message: "Too many requests from this IP, please try again later."
  }
});

app.use("/api", apiLimiter);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Mall API
const mallSchema = new mongoose.Schema({
  name: String,
  city: String
});

const Mall = mongoose.model("Mall", mallSchema);

app.get("/api/malls", async (req, res) => {
  const malls = await Mall.find();
  res.json(malls);
});

app.post("/api/malls", async (req, res) => {
  const mall = await Mall.create(req.body);
  res.json(mall);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
