const express = require('express');
const bill = express.Router();
const Item = require('../models/Item');

bill.post('/items', async (req, res) => {
  try {
    const {name,price}=req.body
  const item = new Item({
    name:name,
    price:price
  });
await item.save();
    res.json("success");
  } catch (err) {
    res.json({ message: err.message });
  }
});
bill.get('/items', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
module.exports = bill;
