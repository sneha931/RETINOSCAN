const express = require('express');
const report = express.Router();
const userdata = require('../models/Reportmodel');

report.post("/details", async (req, res) => {
    try {
        const { name, id } = req.body;
        const today = new Date().toISOString().split('T')[0];
        const user = new userdata({
            id: id,
            name: name,
            date: today
        });
        await user.save();
        res.send("success");
    } catch (e) {
        console.error("Error saving report:", e);
        res.status(500).send("error");
    }
});

report.get("/details", async (req, res) => {
    try {
        const users = await userdata.find();
        res.json(users);
    } catch (e) {
        console.error("Error fetching reports:", e);
        res.status(500).send("error");
    }
});

module.exports = report;
