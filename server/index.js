const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./database");

const userRouter = require("./routes/user-route");

const app = express();

/* 1. CORS  */
app.use(cors({
    origin: "https://zany-waffle-5ggxw9r5xpq9hv9rx-5173.app.github.dev",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

/* 2. BODY PARSING */
app.use(express.json());
app.use(cookieParser());

/* 3. DEBUG  */
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

/* 4. ROUTES */
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(5000, "0.0.0.0", () => {
    console.log("server running");
});