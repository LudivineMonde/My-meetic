const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.router");


mongoose
  .connect("mongodb://127.0.0.1:27017/my-meetic")
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

const app = express();
app.use(express.json());
app.use (cors())

app.use("/users", userRouter);
const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening");
});
