const express = require('express');
const multer = require('multer');
const imagesmodel = require('../models/images');
const img = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
});

const upload = multer({ storage: storage });

img.post('/capture', upload.single('image'), async (req, res) => {
    try {
        const { name, email } = req.body;
        const imagepath = req.file.path;
        const newimage = new imagesmodel({
            name,
            email,
            imagepath
        });
        await newimage.save();
        console.log(`Name: ${name}, Email: ${email}`);
        console.log('File info:', req.file);
        res.json("File uploaded successfully");
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Failed to upload file' });
    }
});

module.exports = img;
