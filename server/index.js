const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors({
    origin:"https://retinoscan.netlify.app",
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/user.js');
const uploadRouter = require('./routes/web.js');
const dashboardRouter = require('./routes/Dash.js');
const reportsRouter = require('./routes/Reports.js');
const billingRouter = require('./routes/Bill.js');

app.use("/api", userRouter);
app.use("/upload", uploadRouter);
app.use("/patient", dashboardRouter);
app.use("/report", reportsRouter);
app.use("/bill", billingRouter);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected");
    })
    .catch((e) => {
        console.error("Database connection error:", e);
    });

app.get("/", (req, res) => {
    res.json("Server running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
