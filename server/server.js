const express = require("express");
const cross = require("cors");
const connectDb = require("./config/db");
require("dotenv").config();

const app = express();
connectDb();

app.use(
  cross({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"],
    credentials: true,
  })
);
app.use(express.json());

//routes

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/locations", require("./routes/locationRoutes"));

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
