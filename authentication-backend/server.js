const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Login-Register  API running");
});

//DB connect
mongoose.connect("mongodb://127.0.0.1:27017/login_register")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// start server
app.listen(5000, () => console.log("Server running on port 5000"));

app.use("/api/auth", authRoutes);
