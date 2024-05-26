const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/user.js');
const uploadRouter = require('./routes/web.js');
const Dashboard = require('./routes/Dash.js');  
const reports=require('./routes/Reports.js');
const billing=require('./routes/Bill.js');
app.use("/api", router);
app.use("/upload", uploadRouter);
app.use("/patient", Dashboard);  
app.use("/report",reports)
app.use("/bill",billing);
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("database connected");
    })
    .catch((e) => {
        console.log(e);
    });

app.get("/", (req, res) => {
    res.json("server is running");
});

app.listen(process.env.PORT, () => {
    console.log("port connected");
});
