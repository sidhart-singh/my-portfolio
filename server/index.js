const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const { prepareDatabase } = require("./config/database");

const contactMeRoute = require("./routes/Contact");

const PORT = process.env.port || 4000;

const app = express();

dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1/reach", contactMeRoute);

app.get("/", (req, res) => {
  // prepareDatabase();

  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Listening to the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
