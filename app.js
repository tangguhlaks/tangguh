const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

// Set view engine ke EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");

app.use(express.static(path.join(__dirname, "public")));

// Import router
const homeRouter = require("./routes/UserRoute");
// Pakai router
app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
