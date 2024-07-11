require("dotenv").config();
const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blogRoute");
const newsRouter = require("./routes/newsRoute");
const { checkRoute } = require("./middleware/checkRoute");
const app = express();
require("./db");

app.use(cors());
app.use(express.json());

app.use(checkRoute);
app.use("/blog", blogRouter);
app.use("/news", newsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example listening on port ${process.env.PORT}`);
});
