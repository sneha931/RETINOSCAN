const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors({
    origin: "https://retinoscan-client.vercel.app",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/user.js');
const uploadRouter = require('./routes/web.js');
const Dashboard = require('./routes/Dash.js');  
const reports=require('./routes/Reports.js');
const billing=require('./routes/Bill.js');
app.use("/api", userRouter);
app.use("/upload", uploadRouter);
app.use("/patient", Dashboard);  
app.use("/report",reports)
app.use("/bill",billing);
app.options('*', cors()); 
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("database connected");
    })
    .catch((e) => {
        console.log(e);
    });

app.get("/", (req, res) => {
    res.json("Server running");
});

app.listen(process.env.PORT, () => {
    console.log("port connected");
});
