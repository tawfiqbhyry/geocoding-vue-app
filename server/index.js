const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Create a new express app
const app = express();

// Enable CORS
app.use(cors());

// routes
app.use("/api/search", require("./routes/search.js"));

//handle production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/public`));
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
