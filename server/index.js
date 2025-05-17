const express = require("express");
const app = express();

//Port
const port = process.env.PORT || 4000


//DB connection
require("./db/connection")


app.get("/", (req, res) => {
  res.send("Hello  Mayur");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
