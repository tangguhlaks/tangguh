const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'e4f8b1d9a3c2e7f5b6c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 } // 1 jam
}));

// Set view engine ke EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");

app.use(express.static(path.join(__dirname, "public")));

// Import router
const userRouter = require("./routes/UserRoute");
const adminRouter = require("./routes/AdminRoute");
// Pakai router
app.use("/", userRouter);
app.use("/", adminRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
